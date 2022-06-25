const AboutMe = (props) => {
    return (
        <div className="AboutMe">
            <h3>{props.title.toUpperCase()}</h3>
            <div className={`EmptyShape-${props.color}`}></div>
            <p>{props.content}</p>
        </div>
    )
}

export default AboutMe;