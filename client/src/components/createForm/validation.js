export default function validation(gameDetail) {
    const errors = {};
    const regexName = /^\b[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s0-9]+$/;
    const regexRating =/[+-]?([0-9]*[.])?\b[0-5]{1,1}\b/;
    const regexImageUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?.(png|jpg|jpeg)$/

    if(!regexName.test(gameDetail.name)) errors.name = 'Only letters and numbers are allowed';
    if(!gameDetail.name) errors.name = 'You must type a name';
    
    if(Date.parse(gameDetail.released) > Date.now()) errors.released = 'The selected date is greater than the current date';
    if(!gameDetail.released) errors.released = 'Choose a released date'

    if(!regexRating.test(gameDetail.rating)) errors.rating = 'Rating the game (Integer or decimal)'
    if(gameDetail.rating > 5) errors.rating = 'Must be less or equal than five'

    if(!gameDetail.description) errors.description = 'You must type a description' 

    if(!regexImageUrl.test(gameDetail.background_image)) errors.background_image = 'Must be a valid url image'
    if(!gameDetail.background_image) errors.background_image = 'Enter a URL image'
 
    // if(!gameDetail.genres.length) errors.genres = 'You must choose at least one gender'
    if(!gameDetail.genres[0]) errors.genres = 'You must choose at least one gender'
    // if(!gameDetail.platforms.length) errors.platforms = 'You must choose at least one platform'
    if(!gameDetail.platforms[0]) errors.platforms = 'You must choose at least one platform'

    return errors
}