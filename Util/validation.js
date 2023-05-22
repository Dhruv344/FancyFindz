function isEmpty(value)
{
    return !value || value.trim() === '';
}

function userCredentialsAreValid(email, password)
{
    return (
        email && email.includes('@') && password && password.trim() >= 6
    );
}

function userDetailsAreValid(email, password, fullName, street, postalCode, city)
{
    return (
        userCredentialsAreValid(email, password) && 
        !isEmpty(fullName) && 
        !isEmpty(street) &&
        !isEmpty(city) &&
        !isEmpty(postalCode) 
    )
}

function emailIsConfirmed(email, confirmEmail)
{
    return email === confirmEmail;
}

module.exports = {
    userDetailsAreValid: userDetailsAreValid,
    emailIsConfirmed: emailIsConfirmed,
}