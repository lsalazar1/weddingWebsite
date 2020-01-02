const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    bio: {
        type: String,
    },
    status: {
        type: String,
        required: true
    },
    food: {
        type: String,
    },
    specialFoodRequest: {
        type: String
    },
    avatar: {
        type: String
    },
    guests: [
        {
            name: {
                type: String,
                required: true
            },
            food: {
                type: String,
            },
            specialFoodRequest: {
                type: String
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);