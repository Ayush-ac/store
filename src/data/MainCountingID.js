function* MainCountingIDGenerator(start = 1) {
    let count = start;

    while (true) {
        yield count++;
    }
}

export function insertIDIntoData(GeneratorCounter, dataArr = []) {
    const counter = GeneratorCounter();

    dataArr.forEach((card) => {
        card.id = counter.next().value;
    });
}

export default MainCountingIDGenerator;