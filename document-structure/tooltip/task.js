const tooltipElements = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

tooltipElements.forEach(tooltipElement => {
    tooltipElement.addEventListener('click', (event) => {
        event.preventDefault();

        if (tooltip.classList.contains('tooltip_active') && tooltipElement.title === tooltip.textContent) {
            tooltip.classList.remove('tooltip_active');
            return;
        }

        tooltip.textContent = tooltipElement.title;

        const rect = tooltipElement.getBoundingClientRect();
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.top = `${rect.top + rect.height}px`;

        tooltip.classList.add('tooltip_active');
    });
});
