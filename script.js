const elementList = document.getElementsByClassName('list-contents');
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

const isValidSearch = (dataStructureStateList) => {
    for (let dataStructure in dataStructureStateList) {
        if (dataStructureStateList[dataStructure]) {
            return true;
        }
    }
    return false;
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

const fallback = document.getElementById('fallback');

document.getElementById('search').addEventListener('keyup', () => {
    const searchKeyword = document.getElementById('search').value.trim().toLowerCase();
    const stateList = compareKeyword(searchKeyword);

    manageList(stateList);
    if (isValidSearch(stateList)) {
        fallback.style.display = 'none';
    } else {
        fallback.style.display = null;
    }
});

fallback.style.display = 'none';

for (let element of elementList) {
    element.addEventListener('click', () => {
        const id = element.id;

        document.getElementById('search').value = "";
        location.href = `${id}/${id}.html`;
    });
}