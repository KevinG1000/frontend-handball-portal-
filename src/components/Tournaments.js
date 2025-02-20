// src/components/Tournaments.js
import React, { useState, useEffect } from 'react';
import './Tournaments.css';

const Tournaments = () => {
  // Hardcoded tournament data
  const tournaments = [
    {
      id: 1,
      name: "2025 WPH R48 Juarez Pro-Stop # 5",
      startDate: "2/28/2025",
      endDate: "3/2/2025",
      location: "Campestre Juarez. Cd. Juarez, CH",
      imageUrl: "https://www.r2sports.com/tourney/imageGallery/gallery/tourneyLogo/42381_large.jpg",
      registrationLink: "https://www.r2sports.com/website/event-website.asp?TID=42381"
    },
    {
      id: 2,
      name: "2025 North Dakota State Handball",
      startDate: "3/7/2025",
      endDate: "3/8/2025",
      location: "YMCA Fercho Branch. Fargo, ND",
      imageUrl: "https://www.twincities.com/wp-content/uploads/2019/08/Handball-image2.jpg?w=1800&resize=1800,1800",
      registrationLink: "https://www.r2sports.com/website/event-website.asp?TID=42382"
    },
    {
      id: 3,
      name: "2025 Oregon State Singles Championship, sponsored by WPH",
      startDate: "3/7/2025",
      endDate: "3/9/2025",
      location: "Sunset Athletic Club. Beaverton, OR",
      imageUrl: "https://www.r2sports.com/tourney/imageGallery/gallery/tourneyLogo/46668_large.jpg",
      registrationLink: "https://www.r2sports.com/website/event-website.asp?TID=46668"
    },
    {
      id: 4,
      name: "2025 43rd Annual Long Island Handball Championships",
      startDate: "3/14/2025",
      endDate: "3/16/2025",
      location: "La Fitness. New Hyde Park, NY",
      imageUrl: "https://www.r2sports.com/tourney/imageGallery/gallery/tourneyLogo/38729_large.jpg",
      registrationLink: "https://www.r2sports.com/website/event-website.asp?TID=38729"
    },
    {
      id: 5,
      name: "St. Patrick's Day Doubles Tournament",
      startDate: "3/14/2025",
      endDate: "3/16/2025",
      location: "South End Rowing Club. San Francisco, CA",
      imageUrl: "https://www.r2sports.com/tourney/imageGallery/gallery/tourneyLogo/47218_large.jpg",
      registrationLink: "https://www.r2sports.com/website/event-website.asp?TID=47218"
    }
  ];

  const [comments, setComments] = useState({});
  const [newComments, setNewComments] = useState({});
  const [editingComment, setEditingComment] = useState(null);
  const [editContent, setEditContent] = useState('');

  // Get current user
  const currentUser = JSON.parse(localStorage.getItem('user'));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Initialize empty comments for each tournament
    const initialComments = {};
    tournaments.forEach(tournament => {
      initialComments[tournament.id] = [];
    });
    setComments(initialComments);
  }, []);

  const handleCommentChange = (tournamentId, value) => {
    setNewComments(prev => ({
      ...prev,
      [tournamentId]: value
    }));
  };

  const handlePostComment = async (tournamentId) => {
    try {
      // Check if comment is empty or only whitespace
      if (!newComments[tournamentId] || !newComments[tournamentId].trim()) {
        alert('Please enter a comment before posting');
        return;
      }

      const response = await fetch('http://localhost:8080/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: newComments[tournamentId].trim(), // Trim whitespace
          tournamentId: tournamentId,
          username: currentUser ? currentUser.username : 'Anonymous'
        })
      });

      if (response.ok) {
        const savedComment = await response.json();
        setComments(prev => ({
          ...prev,
          [tournamentId]: [savedComment, ...(prev[tournamentId] || [])]
        }));

        setNewComments(prev => ({
          ...prev,
          [tournamentId]: ''
        }));

        // Fetch updated comments after posting
        fetchComments(tournamentId);
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const fetchComments = async (tournamentId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/comments/tournament/${tournamentId}`);
      if (response.ok) {
        const data = await response.json();
        setComments(prev => ({
          ...prev,
          [tournamentId]: data
        }));
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleEditComment = async (comment) => {
    if (!editContent.trim()) {
      alert('Comment cannot be empty');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/comments/${comment.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...comment,
          content: editContent.trim()
        })
      });

      if (response.ok) {
        const updatedComment = await response.json();
        setComments(prev => ({
          ...prev,
          [comment.tournamentId]: prev[comment.tournamentId].map(c =>
            c.id === comment.id ? updatedComment : c
          )
        }));
        setEditingComment(null);
        setEditContent('');
      }
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  const handleDeleteComment = async (comment) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      try {
        const response = await fetch(`http://localhost:8080/api/comments/${comment.id}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          setComments(prev => ({
            ...prev,
            [comment.tournamentId]: prev[comment.tournamentId].filter(c => c.id !== comment.id)
          }));
        }
      } catch (error) {
        console.error('Error deleting comment:', error);
      }
    }
  };

  return (
    <div className="tournaments-container">
      <h1>Upcoming Tournaments</h1>
      <div className="info-text">Click the links below to register or find out more!</div>

      {tournaments.map((tournament) => (
        <div key={tournament.id} className="tournament-card">
          <div className="tournament-info">
            <img src={tournament.imageUrl} alt={tournament.name} className="tournament-image" />
            <div className="tournament-details">
              <h2>{tournament.name}</h2>
              <p><strong>Date:</strong> {tournament.startDate} - {tournament.endDate}</p>
              <p><strong>Location:</strong> {tournament.location}</p>
              <a
                href={tournament.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="register-button"
              >
                Register Now
              </a>
            </div>
          </div>

          <div className="comments-section">
            <h3>Comments</h3>
            <div className="comment-input">
              <textarea
                placeholder="Add a comment..."
                value={newComments[tournament.id] || ''}
                onChange={(e) => handleCommentChange(tournament.id, e.target.value)}
              />
              <div className="comment-actions">
                <button
                  onClick={() => handlePostComment(tournament.id)}
                  className="post-comment-button"
                  disabled={!newComments[tournament.id]?.trim()}
                >
                  Comment
                </button>
              </div>
            </div>

            <div className="comments-list">
              {comments[tournament.id]?.map((comment) => (
                <div key={comment.id} className="comment">
                  <div className="comment-header">
                    <div className="avatar">
                      {comment.username ? comment.username[0].toUpperCase() : 'A'}
                    </div>
                    <div className="comment-content">
                      <div className="comment-user-info">
                        <span className="comment-username">{comment.username}</span>
                        <span className="comment-timestamp">
                          {new Date(comment.timestamp).toLocaleString()}
                        </span>
                        {currentUser && currentUser.username === comment.username && (
                          <div className="comment-actions">
                            <button
                              className="action-button"
                              onClick={() => {
                                setEditingComment(comment.id);
                                setEditContent(comment.content);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="action-button delete"
                              onClick={() => handleDeleteComment(comment)}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                      {editingComment === comment.id ? (
                        <div className="edit-comment">
                          <textarea
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                          />
                          <div className="edit-actions">
                            <button
                              onClick={() => handleEditComment(comment)}
                              className="save-button"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => {
                                setEditingComment(null);
                                setEditContent('');
                              }}
                              className="cancel-button"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p>{comment.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tournaments;
