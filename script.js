document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('td');
    const activeCells = new Map();

    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            const row = this.getAttribute('data-col');
            const col = this.getAttribute('data-row');
            const selectedCell = `(${col},${row})`;
            const cellKey = `${col}-${row}`;

            if (!activeCells.has(cellKey)) {
                this.textContent = selectedCell;
                this.classList.add('active');
                activeCells.set(cellKey, true);
            } else {
                this.textContent = '';
                this.classList.remove('active');
                activeCells.delete(cellKey);
            }
        });
    });
});
