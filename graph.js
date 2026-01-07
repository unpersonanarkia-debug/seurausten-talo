// graph.js - H.O.C. visualisointi
let cy;

function initCytoscape() {
    cy = cytoscape({
        container: document.getElementById('cy'),
        style: [
            {
                selector: 'node[id="0"]',
                style: { 'background-color': '#ff6b6b', 'label': 'data(label)', 'text-valign': 'center', 'width': 80, 'height': 80 }
            },
            {
                selector: 'node[id="1"], node[id="2"]',
                style: { 'background-color': '#ffd93d', 'label': 'data(label)', 'width': 60, 'height': 60 }
            },
            {
                selector: 'node[id="3"], node[id="4"]',
                style: { 'background-color': '#6bcf7f', 'label': 'data(label)', 'width': 60, 'height': 60 }
            },
            {
                selector: 'node[id="5"]',
                style: { 'background-color': '#4ecdc4', 'label': 'data(label)', 'width': 80, 'height': 80 }
            },
            {
                selector: 'edge',
                style: { 'width': 'mapData(weight, 0, 1, 1, 4)', 'line-color': '#999', 'curve-style': 'bezier', 'target-arrow-shape': 'triangle' }
            },
            { selector: 'edge[label*="fyysinen"]', style: { 'line-color': '#ff4444' } },
            { selector: 'edge[label*="sosiaalinen"]', style: { 'line-color': '#ffaa00' } },
            { selector: 'edge[label*="hallinto"]', style: { 'line-color': '#4488ff' } }
        ],
        layout: { name: 'cose' }
    });
}

async function loadCase(caseName) {
    let data;
    
    // Tarkista kumpi casebook
    if (caseName.includes('subprime') || caseName.includes('kreikka') || 
        caseName.includes('krypto') || caseName.includes('enron')) {
        const response = await fetch(data/casebooks/talous.json);
        data = await response.json();
    } else {
        const response = await fetch(data/casebooks/terveydenhuolto.json);
        data = await response.json();
    }
    
    const caseData = data.casebooks[caseName];
    cy.elements().remove();
    cy.add(caseData);
    
    // Värikoodaa vaikutuskerrokset
    cy.edges().forEach(edge => {
        const label = edge.data('label');
        if (label === 'fyysinen') edge.style('line-color', '#ff4444');
        if (label === 'sosiaalinen') edge.style('line-color', '#ffaa00');
        if (label === 'hallinto') edge.style('line-color', '#4488ff');
        if (label === 'henkinen') edge.style('line-color', '#ff44ff');
    });
    
    cy.layout({ name: 'cose' }).run();
    cy.fit();
}


document.addEventListener('DOMContentLoaded', () => {
    initCytoscape();
    loadCase('opioidikriisi'); // Default
});

document.getElementById('caseSelect').addEventListener('change', (e) => {
    loadCase(e.target.value);
});
