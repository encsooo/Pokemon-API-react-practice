import React from 'react'

const PokeCard = (props) => {
    const { name } = props.location.state.item
    const { index } = props.location.state
    console.log(props)
    console.log(index)
    const url = `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`

    return (
        <div className="poki-container">
            <div className="popup" onClick={props.history.goBack}>
                <h3 className="please">{name}</h3>
                <div className="popup-poki">
                    <img src={url} alt={name} />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident culpa ratione ad modi autem repellat obcaecati. Ab sit maxime harum incidunt, ducimus laboriosam! Ea deleniti asperiores, aliquid quod dolorem provident dicta neque dolorum. Dolor saepe inventore quisquam quis distinctio vitae!</p>
                </div>
            </div>
        </div>
    )
}

export default PokeCard;
