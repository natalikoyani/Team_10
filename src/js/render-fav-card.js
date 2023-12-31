import svgIcons from '../img/icons.svg';

export const renderRecipes = (recipes) => {

    return recipes.map(recipe => {

        const { _id, title, description, thumb, rating, category } = recipe
        let roundedRating = Math.round(rating)

        return `<li class="fav-card" 
        data-_id="${_id}"
        data-title="${title}"
        data-description="${description}"
        data-thumb="${thumb}"
        data-rating="${rating}"
        data-category="${category}"
    style="background: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%), url(${thumb}), lightgray -29.5px 0px / 125.194% 112.544% no-repeat; background-size:cover;"
    >

    <svg class="heart-svg heart-filled" data-_id="${_id}">
        <use href="${svgIcons}#heart"></use>
    </svg>

    <h3 class="recipe-title">${title}</h3>
    <p class="recipe-description two-line-ellipsis">${description}</p>
    <div class="recipe-footer">
        <span class="rating-number">${rating}</span>
        <ul class="recipe-rating">
            <li class="rating-item">
                <svg class="star-svg${roundedRating > 0 ? ' star-filled' : ''}">
                    <use href="${svgIcons}#star"></use>
                </svg>
            </li>
            <li class="rating-item">
                <svg class="star-svg${roundedRating > 1 ? ' star-filled' : ''}">
                    <use href="${svgIcons}#star"></use>
                </svg>
            </li>
            <li class="rating-item">
                <svg class="star-svg${roundedRating > 2 ? ' star-filled' : ''}">
                    <use href="${svgIcons}#star"></use>
                </svg>
            </li>
            <li class="rating-item">
                <svg class="star-svg${roundedRating > 3 ? ' star-filled' : ''}">
                    <use href="${svgIcons}#star"></use>
                </svg>
            </li>
            <li class="rating-item">
                <svg class="star-svg${roundedRating > 4 ? ' star-filled' : ''}">
                    <use href="${svgIcons}#star"></use>
                </svg>
            </li>
        </ul>
        <button class="recipe-btn" type="button" data-_id="${_id}">See recipe</button>
    </div>
    </li>`

    }).join('')
}