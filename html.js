class htmlHelper
{
	static applyCSS(element, css)
	{
		if (!element) return;
		if (!css) return element;
		if (css == "") return element;
		
		let classes = css.split(" ");
		let classesCount = classes.length;
		if (classesCount<= 1){
			element.className = css;
			return element;
		}
		for (let i = 0; i < classesCount; i++) {
			const cssClass = classes[i];
			element.classList.add(cssClass);
		}
		return element;
	}

	static div(content="", id="", css="")
	{
		let div = document.createElement("div");
		if (id) div.id = id;
		div.innerHTML = content;
		div = this.applyCSS(div,css);
		return div;
	}

	static table(id="",css="")
	{
		let table = document.createElement("table");
		if (id) table.id = id;
		table = this.applyCSS(table,css);
		return table;
	}

	static tr(id="",css="")
	{
		let tr = document.createElement("tr");
		if (id) tr.id = id;
		tr = this.applyCSS(tr,css);
		return tr;
	}

	static td(content="", id="", css="")
	{
		let td = document.createElement("td");
		if (id) td.id = id;
		td.innerHTML = content;
		td = this.applyCSS(td,css);
		return td;
	}

	static th(content="", id="", css="")
	{
		let th = document.createElement("th");
		if (id) th.id = id;
		th.innerHTML = content;
		th = this.applyCSS(th,css);
		return th;
	}

	static span(content="", id="", css="")
	{
		let span = document.createElement("span");
		if (id) span.id = id;
		span.innerHTML = content;
		span = this.applyCSS(span,css);
		return span;
	}

	static a(content="", link="", id="", css="")
	{
		let a = document.createElement("a");
		if (id) a.id = id;
		a.innerHTML = content;
		a.href = link;
		a = this.applyCSS(a,css);
		return a;
	}

	static img(src="", alt="", id="", css="")
	{
		let img = document.createElement("img");
		if (id) img.id = id;
		img.src = src;
		img.alt = alt;
		img = this.applyCSS(img,css);
		return img;
	}

	static button(content="", onclick="", id="", css="")
	{
		let button = document.createElement("button");
		if (id) button.id = id;
		button.innerHTML = content;
		button.setAttribute("onclick", onclick);
		button = this.applyCSS(button,css);
		return button;
	}

	static textInput(type="text", value="",id="", css="", onchange="")
	{
		let input = document.createElement("input");
		if (id) input.id = id;
		input.type = type;
		input.value = value;
		input = this.applyCSS(input,css);
		if (onchange) input.setAttribute("onchange", onchange);
		return input;
	}

	static checkbox(value="", id="", css="", onchange="")
	{
		let checkbox = document.createElement("input");
		if (id) checkbox.id = id;
		checkbox.type = "checkbox";
		checkbox.value = value;
		checkbox = this.applyCSS(checkbox,css);
		if (onchange) checkbox.setAttribute("onchange", onchange);
		return checkbox;
	}

	static radio(name="", value="", id="", css="", onchange="")
	{
		let radio = document.createElement("input");
		if (id) radio.id = id;
		radio.type = "radio";
		radio.name = name;
		radio.value = value;
		radio = this.applyCSS(radio,css);
		if (onchange) radio.setAttribute("onchange", onchange);
		return radio;
	}

	static fileInput(id="", css="", onchange="")
	{
		let fileInput = document.createElement("input");
		if (id) fileInput.id = id;
		fileInput.type = "file";
		fileInput = this.applyCSS(fileInput,css);
		if (onchange) fileInput.setAttribute("onchange", onchange);
		return fileInput;
	}

	static colorInput(value="", id="", css="", onchange="")
	{
		let colorInput = document.createElement("input");
		if (id) colorInput.id = id;
		colorInput.type = "color";
		colorInput.value = value;
		colorInput = this.applyCSS(colorInput,css);
		if (onchange) colorInput.setAttribute("onchange", onchange);
		return colorInput;
	}

	static numberInput(value="", id="", css="", onchange="", step=1, min=0, max=100, decimals=0)
	{
		let numberInput = document.createElement("input");
		if (id) numberInput.id = id;
		numberInput.type = "number";
		numberInput.value = value;
		numberInput.step = step;
		numberInput.min = min;
		numberInput.max = max;
		numberInput.decimals = decimals;
		numberInput = this.applyCSS(numberInput,css);
		if (onchange) numberInput.setAttribute("onchange", onchange);
		return numberInput;
	}

	static rangeInput(value="", id="", css="", onchange="", step=1, min=0, max=100)
	{
		let rangeInput = document.createElement("input");
		if (id) rangeInput.id = id;
		rangeInput.type = "range";
		rangeInput.value = value;
		rangeInput.step = step;
		rangeInput.min = min;
		rangeInput.max = max;
		rangeInput = this.applyCSS(rangeInput,css);
		if (onchange) rangeInput.setAttribute("onchange", onchange);
		return rangeInput;
	}

	static radioGroup(name="", options=[], id="", css="", onchange="")
	{
		let radioGroup = document.createElement("div");
		if (id) radioGroup.id = id;
		radioGroup = this.applyCSS(radioGroup,css);
		for (let i = 0; i < options.length; i++) {
			const option = options[i];
			let radio = this.radio(name, option.value, option.id, option.css, onchange);
			radioGroup.appendChild(radio);
			if (option.label) {
				let label = this.label(option.label, option.id, option.labelId, option.labelCss);
				radioGroup.appendChild(label);
			}
		}
		return radioGroup;
	}

	static calendarInput(value="", id="", css="", onchange="")
	{
		let calendarInput = document.createElement("input");
		if (id) calendarInput.id = id;
		calendarInput.type = "date";
		calendarInput.value = value;
		calendarInput = this.applyCSS(calendarInput,css);
		if (onchange) calendarInput.setAttribute("onchange", onchange);
		return calendarInput;
	}

	static phoneInput(value="", id="", css="", onchange="", pattern="[0-9]{2} [9]{1} [0-9]{4}-[0-9]{4}")
	{
		let telInput = document.createElement("input");
		if (id) telInput.id = id;
		telInput.type = "tel";
		telInput.value = value;
		telInput.pattern = pattern;
		telInput = this.applyCSS(telInput,css);
		if (onchange) telInput.setAttribute("onchange", onchange);
		return telInput;
	}

	static label(content="", forElement="", id="", css="")
	{
		let label = document.createElement("label");
		if (id) label.id = id;
		label.innerHTML = content;
		label.setAttribute("for", forElement);
		label = this.applyCSS(label,css);
		return label;
	}

	static option(content="", value="", id="", css="")
	{
		let option = document.createElement("option");
		if (id) option.id = id;
		option.innerHTML = content;
		option.value = value;
		option = this.applyCSS(option,css);
		return option;
	}

	static select(labels, values, id= "", selectedIndex = 0, css="", onchange="")
	{
		let select = document.createElement("select");
		if (id) select.id = id;
		for (let i = 0; i < labels.length; i++) {
			const label = labels[i];
			const value = values[i];
			let option = this.option(label, value);
			select.appendChild(option);
		}
		select.selectedIndex = selectedIndex;
		select = this.applyCSS(select,css);
		if (onchange) select.setAttribute("onchange", onchange);
		return select;
	}

	static textarea(content="", id="", css="")
	{
		let textarea = document.createElement("textarea");
		if (id) textarea.id = id;
		textarea.innerHTML = content;
		textarea = this.applyCSS(textarea,css);
		return textarea;
	}

	static form(id="", css="")
	{
		let form = document.createElement("form");
		if (id) form.id = id;
		form = this.applyCSS(form,css);
		return form;
	}

	static h1(content="", id="", css="")
	{
		let h1 = document.createElement("h1");
		if (id) h1.id = id;
		h1.innerHTML = content;
		h1 = this.applyCSS(h1,css);
		return h1;
	}

	static h2(content="", id="", css="")
	{
		let h2 = document.createElement("h2");
		if (id) h2.id = id;
		h2.innerHTML = content;
		h2 = this.applyCSS(h2,css);
		return h2;
	}

	static h3(content="", id="", css="")
	{
		let h3 = document.createElement("h3");
		if (id) h3.id = id;
		h3.innerHTML = content;
		h3 = this.applyCSS(h3,css);
		return h3;
	}

	static h4(content="", id="", css="")
	{
		let h4 = document.createElement("h4");
		if (id) h4.id = id;
		h4.innerHTML = content;
		h4 = this.applyCSS(h4,css);
		return h4;
	}

	static h5(content="", id="", css="")
	{
		let h5 = document.createElement("h5");
		if (id) h5.id = id;
		h5.innerHTML = content;
		h5 = this.applyCSS(h5,css);
		return h5;
	}

	static h6(content="", id="", css="")
	{
		let h6 = document.createElement("h6");
		if (id) h6.id = id;
		h6.innerHTML = content;
		h6 = this.applyCSS(h6,css);
		return h6;
	}

	static p (content="", id="", css="")
	{
		let p = document.createElement("p");
		if (id) p.id = id;
		p.innerHTML = content;
		p = this.applyCSS(p,css);
		return p;
	}

	static br()
	{
		return document.createElement("br");
	}

	static hr()
	{
		return document.createElement("hr");
	}

	static header(content="", id="", css="")
	{
		let header = document.createElement("header");
		if (id) header.id = id;
		header.innerHTML = content;
		header = this.applyCSS(header,css);
		return header;
	}

	static nav(content="", id="", css="")
	{
		let nav = document.createElement("nav");
		if (id) nav.id = id;
		nav.innerHTML = content;
		nav = this.applyCSS(nav,css);
		return nav;
	}

	static main(content="", id="", css="")
	{
		let main = document.createElement("main");
		if (id) main.id = id;
		main.innerHTML = content;
		main = this.applyCSS(main,css);
		return main;
	}

	static aside(content="", id="", css="")
	{
		let aside = document.createElement("aside");
		if (id) aside.id = id;
		aside.innerHTML = content;
		aside = this.applyCSS(aside,css);
		return aside;
	}

	static section(content="", id="", css="")
	{
		let section = document.createElement("section");
		if (id) section.id = id;
		section.innerHTML = content;
		section = this.applyCSS(section,css);
		return section;
	}

	static article(content="", id="", css="")
	{
		let article = document.createElement("article");
		if (id) article.id = id;
		article.innerHTML = content;
		article = this.applyCSS(article,css);
		return article;
	}

	static footer(content="", id="", css="")
	{
		let footer = document.createElement("footer");
		if (id) footer.id = id;
		footer.innerHTML = content;
		footer = this.applyCSS(footer,css);
		return footer;
	}
}

const defaultColors = 
[
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
];
const defaultColorsOpacity = 
[
    "rgba(255, 102, 51, 0.7)",
    "rgba(255, 179, 153, 0.7)",
    "rgba(255, 51, 255, 0.7)",
    "rgba(255, 255, 153, 0.7)",
    "rgba(0, 179, 230, 0.7)",
    "rgba(230, 179, 51, 0.7)",
    "rgba(51, 102, 230, 0.7)",
    "rgba(153, 153, 102, 0.7)",
    "rgba(153, 255, 153, 0.7)",
    "rgba(179, 77, 77, 0.7)",
    "rgba(128, 179, 0, 0.7)",
    "rgba(128, 153, 0, 0.7)",
    "rgba(230, 179, 179, 0.7)",
    "rgba(102, 128, 179, 0.7)",
    "rgba(102, 153, 26, 0.7)",
];
class Charts 
{
    static barPlot(labels,values, colors, id="")
    {
        let wraper = htmlHelper.div("",id,"bar_plot");

        let maxValue = Math.max(...values); 
        heights = values.map(value => (value / maxValue) * 100);
        widths = 1/values.length * 100;

        grid = htmlHelper.table("", "", "bar_plot_grid");
        wraper.appendChild(grid);
        grid.style.width = "100%";
        grid.style.height = "100%";
        grid.style.borderCollapse = "collapse";
        grid.style.tableLayout = "fixed";

        barRow = htmlHelper.tr("","", "bar_row");
        grid.appendChild(barRow);

        labelsRow = htmlHelper.tr("","", "bar_labels_row");
        grid.appendChild(labelsRow);
        

        for (let i = 0; i < values.length; i++) {
            const label = labels[i];
            const value = values[i];
            const color = colors[i] || defaultColors[i % defaultColors.length];
            const height = heights[i];
            const width = widths;
            let barCell = htmlHelper.td("","","bar_cell");
            
            let bar = htmlHelper.div("","",`bar bar_${i}`);
            bar.id = id + "_bar_" + i;
            bar.style.width = width + "%";
            bar.style.height = height + "%";
            bar.style.backgroundColor = color;
            bar.style.margin = "0 auto";
            bar.style.paddingTop = "-15px";
            bar.textContent = value.toFixed(2);

            barCell.appendChild(bar);
            barRow.appendChild(barCell);
            
            let labelCell = htmlHelper.td(label,"","bar_label");
            labelCell.style.textAlign = "center";
            labelsRow.appendChild(labelCell);
        }
        return wraper;
    }

    static pieChart(labels, values, colors, id="")
    {
        let outerBound = htmlHelper.div("",id,"pie_chart");

        let totalValue = values.reduce((a, b) => a + b, 0);
        let angles = values.map(value => (value / totalValue) * 360);
        let cumulativeAngle = 0;
        for (let i = 0; i < values.length; i++) {
            const label = labels[i];
            const value = values[i];
            const color = colors[i] || defaultColors[i % defaultColors.length];
            const angle = angles[i];
            let slice = htmlHelper.div("","",`pie_slice pie_slice_${i}`);
            slice.classList.add();
            slice.style.width = "100%";
            slice.style.height = "100%";
            slice.style.backgroundColor = color;

            let p0 = 50 + 50 * Math.cos(cumulativeAngle * Math.PI / 180);
            let p1 = 50 + 50 * Math.sin(cumulativeAngle * Math.PI / 180);
            let p2 = 50 + 50 * Math.cos((cumulativeAngle + angle) * Math.PI / 180);
            let p3 = 50 + 50 * Math.sin((cumulativeAngle + angle) * Math.PI / 180);

            slice.style.clipPath = `polygon(50% 50%, ${p0}% ${p1}%, ${p2}% ${p3}%)`;

            slice.style.margin = "0 auto";
            slice.title = label + " (" + value.toFixed(2) + ")";
            // slice.textContent = label + " (" + value.toFixed(2) + ")";
            outerBound.appendChild(slice);
            cumulativeAngle += angle;
        }
        return outerBound;
    }

    static progressBar(label, percentage, color, id="")
    {
        let wraper = htmlHelper.div("",id,"progress_bar");
        
        let background = htmlHelper.div("","","progress_bar_background");
        wraper.appendChild(background);
        
        let bar = htmlHelper.div("","","progress_bar_fill");
        bar.style.width = percentage + "%";
        bar.style.backgroundColor = color || defaultColors[0];
        background.appendChild(bar);

        labelElement = htmlHelper.div(label + " (" + percentage.toFixed(2) + "%)","","progress_bar_label");
        wraper.appendChild(labelElement);
        return wraper;
    }
}
