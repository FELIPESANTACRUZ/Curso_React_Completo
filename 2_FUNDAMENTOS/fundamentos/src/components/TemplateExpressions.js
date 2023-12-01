const TemplateExpressions = () => {

    const name = "Felipe";

    const data = {
        age:17,
        job: "Programmer"
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <h1>Você atua como: {data.job}</h1>
            <h1>Sua idade é: {data.age}</h1>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )
}

export default TemplateExpressions