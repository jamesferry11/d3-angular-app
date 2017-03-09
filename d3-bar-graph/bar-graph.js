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
    var xScale = d3.scaleBand()
        .domain(data.map((d) => {
            return d.day
        }))
        .range([0, width]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => {
            return d.sales;
        })])
        .range([0, height]);

    var xAxis = d3.axisBottom(xScale);

    var yAxis = d3.axisLeft(yScale)
        .ticks(5);

    svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis);

    svg.append('g')
        .call(yAxis);

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
            return height - yScale(d.sales);
        })

        .attr('width', witdth / data.length - barPadding)

        .attr('height', (d) => {
            return yScale(d.sales);
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

    svg.selectAll('text.label')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'label')
        .text(function(d) {
            return d.sales;
        })
        .attr('text-anchor', 'middle')
        .attr('x', function(d, i) {
            return i * (width / data.length) + (width / data.length - barPadding) / 2;
        })
        .attr('y', function(d) {
            return yScale(d.sales) + 20;
        })
        .attr('font-family', 'sans-serif')
        .attr('font-size', '11px')
        .attr('fill', 'white');

});