import React from 'react'

class Content extends React.Component {

    constructor() {
        super()
        this.state = {
            prev: { alt: '', idx: null },
            images: [
                { img: 'Bond', flip: true },
                { img: 'Bond', flip: true },
                { img: 'Dann', flip: true },
                { img: 'Dann', flip: true },
                { img: 'David', flip: true },
                { img: 'David', flip: true },
                { img: 'Frank', flip: true },
                { img: 'Frank', flip: true },

                { img: 'James', flip: true },
                { img: 'James', flip: true },
                { img: 'Jane', flip: true },
                { img: 'Jane', flip: true },
                { img: 'Joan', flip: true },
                { img: 'Joan', flip: true },
                { img: 'John', flip: true },
                { img: 'John', flip: true }
            ]
        }

        this.shuffleCards = this.shuffleCards.bind(this)
        this.flipCards = this.flipCards.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }

    componentDidMount() {
        this.shuffleCards()
        this.flipCards()
    }

    shuffleCards() {
        const { images } = this.state
        const length = images.length - 1

        for (let i = length; i > 0; i--) {
            const rnd = Math.floor(Math.random() * i)
            const temp = images[rnd]
            images[rnd] = images[i]
            images[i] = temp

        }
        this.setState({ images })
    }

    flipCards() {
        const images = this.state.images.map(({ img }) => {
            return { img, flip: false }
        })

        setTimeout(() => {
            this.setState({ images })
        }, 5000)
    }

    clickHandler(e) {
        const idx = e.target.id
        const alt = e.target.getAttribute('alt')
        const { prev, images } = this.state

        if (alt === "white") return

        images[idx].flip = true

        if (prev.alt === "") {
            this.setState({
                images,
                prev: { alt, idx }
            })
        } else if (prev.alt !== alt) {
            this.setState({ images })

            setTimeout(() => {
                images[prev.idx].flip = false
                images[idx].flip = false

                this.setState({
                    images,
                    prev: { alt: '', idx: null }
                })
            }, 300)
        } else if (prev.alt === alt && prev.idx !== idx) {
            this.setState({ images })

            setTimeout(() => {
                images[prev.idx] = {
                    img: 'white',
                    flip: true
                }
                images[idx] = {
                    img: 'white',
                    flip: true
                }

                this.setState({
                    images,
                    prev: { alt: '', idx: null }
                })
            }, 300)
        }
    }

    render() {

        const { images } = this.state
        const cards = images.map((image, key) => {
            return (
                <Card
                    image={image}
                    id={key}
                    clickHandler={this.clickHandler}
                    key={key}
                />
            )
        })

        return (
            <div className="content">
                {cards}
            </div>
        )
    }
}

const Card = ({ image, id, clickHandler }) => {

    const { img, flip } = image
    const card = flip ? <img src={`img\\${img}.png`} id={id} alt={img} />
        : <img src="img\frame.png" id={id} alt={img} />

    return (
        <div className="card" onClick={clickHandler} >
            {card}
        </div>
    )
}

export default Content