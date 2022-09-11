

module.exports.getDate = () => {
    return  Date().toLocaleString('en-US', { timeZone: 'Africa/Johannesburg' })
}