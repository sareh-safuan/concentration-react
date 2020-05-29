import React from 'react'

class Content extends React.Component {

    constructor() {
        super()
        this.state = {
            prev: { alt: '', idx: null },
            counter: 16,
            files: [
                'Bond', 'Dann', 'David', 'Frank', 'James', 'Jane', 'Jerry', 'Joan',
                'John', 'Kid', 'Lisa', 'Marie', 'Maya', 'Stern', 'Terry', 'Truck',
                'John', 'Kid', 'Lisa', 'Marie', 'Maya', 'Stern', 'Terry', 'Truck',
                'Bond', 'Dann', 'David', 'Frank', 'James', 'Jane', 'Jerry', 'Joan'
            ],
            images: []
        }

        this.shuffleCards = this.shuffleCards.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }

    componentDidMount() {
        this.shuffleCards()
    }

    componentDidUpdate() {
        const { counter } = this.state

        if (!counter) {
            this.props.gameFinish()
            this.shuffleCards()
            this.setState({ counter: 16 })
        }
    }

    shuffleCards() {
        const { files } = this.state
        const images = files.map((file) => {
            return { img: file, flip: false }
        })
        const length = images.length - 1

        for (let i = length; i > 0; i--) {
            const rnd = Math.floor(Math.random() * i)
            const temp = images[rnd]
            images[rnd] = images[i]
            images[i] = temp

        }
        this.setState({ images })
    }

    clickHandler(e) {

        if (e.target.tagName !== "IMG") return

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
                    counter: this.state.counter - 1,
                    images,
                    prev: { alt: '', idx: null }
                })
            }, 300)
        }
    }

    render() {

        const { images } = this.state

        if (!this.props.start) {
            return (
                <div className="content">
                    <h3>Click start button to start</h3>
                </div>
            )
        }

        return (
            <div className="content" onClick={this.clickHandler}>
                <div className="container">
                    <Card images={images} />
                </div>
            </div>
        )
    }
}

const Card = ({ images }) => {

    const card = images.map((image, key) => {
        const { img, flip } = image
        const el = flip ?
            (<img src={`img\\${img}.png`} id={key} alt={img} />)
            : (<img src="img\frame.png" id={key} alt={img} />)

        return <div className="card" key={key}>{el}</div>
    })

    return card
}

export default Content