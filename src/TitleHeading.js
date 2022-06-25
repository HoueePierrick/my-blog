const TitleHeading = (props) => {
    return (
        <div className="TitleHeading">
            <h3>{props.title.toUpperCase()}</h3>
            <div>{props.description}</div>
            <div className={`EmptyShape-${props.color}`}></div>
            <p>{props.content}</p>
        </div>
    )
}

export default TitleHeading