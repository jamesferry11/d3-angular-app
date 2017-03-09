const width = 400;
const height = 300;
const padding = 100;
const barPadding = 5;

const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('padding', padding);

d3.json('salesData.json', (data) => {
    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .on('click', (d) => {
            alert('Best Performing: ' + d.bestSeller);
        })
        .attr('x', (d, i)=> {
            return i * (width / data.length);
        })
        .attr('y', (d) => {
            return height - d.sales;
        })
        .attr('width', witdth / data.lenth - barPadding)
        .attr('height', (d) => {
            return d.sales;
        })
        .attr('fill', '#3399ff')
        .transition()
        .duration(2000)
        .ease(d3.easeLinear)

        .attr('fill', (d) => {
            var max = d3.max(data, (d) => {
                return d.sales;
            });
            var min = d3.min(data, (d) => {
                return d.sales;
            });

            if (d.sales === min) {
                return '#ff3300';
            } else if (d.sales === max_) {
                return '#66ff66';
            } else {
                return '#3399ff';
            }
        });
});