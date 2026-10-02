const Greeting = ({name, message, age}) => {
    return (
        <h2>
            Hello, {name} - {message}, you are {age} old!
        </h2>
    );
};

export default Greeting;