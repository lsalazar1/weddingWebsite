const express = require('express');
const request = require('request');
const config = require('config');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const router = express.Router();

// Models
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Post = require('../../models/Post');

// @route    GET api/profile/me
// @desc     Get current user's profile
// @access   Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }

        res.json(profile);
    } catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    POST api/profile
// @desc     Create or update a user profile
// @access   Private
router.post(
    '/', 
    [
        auth,
        [
            check('status', 'You forgot to accept or decline!')
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            status,
            food
        } = req.body;

        // Build Profile Object
        const profileFields = {};

        profileFields.user = req.user.id;
        if (food) profileFields.food = food;
        if (status) profileFields.status = status;

        try {
            let profile = await Profile.findOne({ user: req.user.id });

            // Update profile
            if (profile) {
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id }, 
                    { $set: profileFields },
                    { new: true }
                );
                
                return res.json(profile);
            }

            profile = new Profile(profileFields);

            await profile.save();
            res.json(profile);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    GET api/profile/user/:user_id
// @desc     Get profiles by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar']);
        
        if (!profile)
            return res.status(400).json({ msg: 'Profile not found' });
        
        res.json(profile);
    } catch (err) {
        console.error(err.message);

        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' })
        }

        res.status(500).send('Server Error');
    }
});

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
    try {
        // Remove user posts
        await Post.deleteMany({ user: req.user.id });        

        // Remove profile
        await Profile.findOneAndRemove({ user: req.user.id });
        
        // Remove user
        await User.findOneAndRemove({ _id: req.user.id });
        
        res.json({ msg: 'User deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    PUT api/profile/guests
// @desc     Add profile guests
// @access   Private
router.put(
    '/guests',
    [
        auth,
        [
            check('name', 'Please enter a name for your guest')
                .not()
                .isEmpty()
        ]
    ], 
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            name,
            food
        } = req.body;

        // Destructuring
        const newGuest = {
            name,
            food
        }

        try {
            const profile = await Profile.findOne({ user: req.user.id });

            // the unshift() method adds new items to the beginning of an array, and it returns the new length
            profile.guests.unshift(newGuest);

            await profile.save();

            res.json(profile);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route   DELETE api/profile/guests/:exp_id
// @desc    Delete guest from profile guest
// @access  Private
router.delete('/guests/:g_id', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id })

        // Get the remove index
        const removeIndex = profile.guests
            .map(item => item.id)
            .indexOf(req.params.g_id);

        profile.guests.splice(removeIndex, 1);
        await profile.save();

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;