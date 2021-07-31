const elementList = document.getElementsByClassName('contents-item');
const dataStructureKeywordList = [
    { keywords: ['stack', '스택'], verdict: 'stack' },
    { keywords: ['queue', '큐'], verdict: 'queue' },
    { keywords: ['list', '리스트'], verdict: 'list' },
];

const compareKeyword = (inputKeyword) => {
    let newStateList = {};

    for (let dataStructure of dataStructureKeywordList) {
        newStateList[dataStructure.verdict] = false;
        for (let keyword of dataStructure.keywords) {
            if (keyword.includes(inputKeyword)) {
                newStateList[dataStructure.verdict] = true;
                break;
            }
        }
    }
    return newStateList;
};

const manageList = (dataStructureStateList) => {
    for (let dataStructure in dataStructureStateList) {
        const element = document.getElementById(dataStructure);
        if (dataStructureStateList[dataStructure]) {
            element.style.display = null;
        } else {
            element.style.display = 'none';
        }
    }
};

const max = (a, b) => {
    if (a >= b) {
        return a;
    } else {
        return b;
    }
};

document.getElementById('search').addEventListener('keyup', () => {
    const searchKeyword = document.querySelector('#search > input').value.trim().toLowerCase();
    const stateList = compareKeyword(searchKeyword);

    manageList(stateList);
});

for (let element of elementList) {
    element.addEventListener('click', () => {
        const id = element.id;

        document.querySelector('#search > input').value = "";
        location.href = `${id}/${id}.html`;
    });
}