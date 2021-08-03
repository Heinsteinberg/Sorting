const elementList = document.getElementsByClassName('contents-item');
const dataStructureKeywordList = [
    { keywords: ['stack', '스택'], verdict: 'stack' },
    { keywords: ['queue', '큐'], verdict: 'queue' },
    { keywords: ['list', '리스트'], verdict: 'list' },
    { keywords: ['tree', '트리'], verdict: 'tree' },
    { keywords: ['binary tree', '이진트리'], verdict: 'binary-tree' },
    { keywords: ['binary search tree', '이진탐색트리'], verdict: 'binary-search-tree' },
    { keywords: ['avltree', 'avl트리'], verdict: 'avl-tree' },
    { keywords: ['redblacktree', '레드블랙트리'], verdict: 'red-black-tree' },
    { keywords: ['graph', '그래프'], verdict: 'graph' },
    { keywords: ['dfs', '깊이우선탐색'], verdict: 'dfs' },
    { keywords: ['bfs', '너비우선탐색'], verdict: 'bfs' },
    { keywords: ['connectedcomponents', '연결요소'], verdict: 'connected-components' },
    { keywords: ['stronglyconnectedcomponents', '강한연결요소'], verdict: 'strongly-connected-components' },
    { keywords: ['topological-sorting', '위상정렬'], verdict: 'topological-sorting' },
    { keywords: ['heap', '힙'], verdict: 'heap' },
    { keywords: ['priorityqueue', '우선순위큐'], verdict: 'priority-queue' },
    { keywords: ['selectionsort', '선택정렬'], verdict: 'selection-sort' },
    { keywords: ['insertionsort', '삽입정렬'], verdict: 'insertion-sort' },
    { keywords: ['bubblesort', '버븥정렬', '버블소트'], verdict: 'bubble-sort' },
    { keywords: ['quicksort', '퀵정렬', '퀵소트'], verdict: 'quick-sort' },
    { keywords: ['mergesort', '병합정렬', '합병정렬', '머지정렬', '머지소트'], verdict: 'merge-sort' },
    { keywords: ['heapsort', '힙정렬', '힙소트'], verdict: 'heap-sort' },
    { keywords: ['radixsort', '기수정렬'], verdict: 'radix-sort' },
    { keywords: ['hashtable', '해시테이블'], verdict: 'hash-table' },
];

const compareKeyword = (inputKeyword) => {
    let newStateList = {};
    for (let dataStructure of dataStructureKeywordList) {
        newStateList[dataStructure.verdict] = false;
        for (let keyword of dataStructure.keywords) {
            if (keyword.includes(inputKeyword.replace(/[^a-zA-Z가-힣]/g, ''))) {
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