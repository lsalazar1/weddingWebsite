import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({ 
    post: { 
        _id,
        text,
        name,
        avatar,
        user,
        likes,
        comments,
        date 
    },
    auth,
    addLike,
    removeLike,
    deletePost,
    showActions
}) => (
    <div class="post bg-white p-1 my-1">
        <div>
            <img class="round-img" src={avatar} alt="" />
            <h4 class="post-name">{name}</h4>
        </div>
        <div>
            <p class="my-1 no-cursive">
                {text}
            </p>
            <p class="post-date">
                <Moment format="YYYY/MM/DD">{date}</Moment>
            </p>

            {showActions && <Fragment>
                <button onClick={e => addLike(_id)} type="button" class="btn btn-light">
                <i class="fas fa-plus" />
                    <span>
                    {likes.length > 0 && (
                        <span>{likes.length}</span>
                    )}
                    </span>
                </button>
                <button onClick={e => removeLike(_id)} type="button" class="btn btn-light">
                <i class="fas fa-minus" />
                </button>
                <Link to={`/posts/${_id}`} class="btn btn-primary">
                    Discussion{' '}
                    {comments.length > 0 && (
                        <span class='comment-count'>{comments.length}</span>
                    )}
                </Link>
                {!auth.loading && user === auth.user._id && (
                    <button onClick={e => deletePost(_id)} type="button" class="btn btn-danger">
                        <i class="fas fa-times" />
                    </button>
                )}
            </Fragment>}
        </div>
    </div>
)

PostItem.defaultProps = {
    showActions: true
};

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { addLike, removeLike, deletePost }
)(PostItem);
