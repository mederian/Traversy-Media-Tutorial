// @desc    Get Goals
// @route   Get /api/goals
// @access  Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
}

// @desc    Set Goals
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }
    res.status(200).json({ message: 'Set Goal' })
}

// @desc    Update Goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
    res.status(200).json({ message: `Get Goals ${req.params.id}` })
}

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete Goals ${req.params.id}` })
}

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal 
}