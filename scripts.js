function addPeriods(){
	//used to dynamically allow the user to enter in multiple periods with different weekly amounts
	var amount = document.getElementById("payPeriods").value;
	var container = document.getElementById("multiContainer");

	while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
            for (i=0;i<amount;i++){
                // Append a node with text and line breaks
                container.appendChild(document.createTextNode("Pay Period " + (i+1)));
                container.appendChild(document.createElement("br"));
				container.appendChild(document.createTextNode("Date From:"));
                container.appendChild(document.createElement("br"));
                // Create an <input> element, set its type and name attributes
                var inputFrom = document.createElement("input");
                inputFrom.type = "text";
                inputFrom.name = "dateFrom" + i;
                container.appendChild(inputFrom);
                // Append a line break 
                container.appendChild(document.createElement("br"));
				container.appendChild(document.createTextNode("Date To:"));
                container.appendChild(document.createElement("br"));
                // Create an <input> element, set its type and name attributes
                var inputTo = document.createElement("input");
                inputTo.type = "text";
                inputTo.name = "dateTo" + i;
                container.appendChild(inputTo);
                // Append a line break 
                container.appendChild(document.createElement("br"));
				container.appendChild(document.createTextNode("Weekly Amount:"));
                container.appendChild(document.createElement("br"));
                // Create an <input> element, set its type and name attributes
                var inputAmount = document.createElement("input");
                inputAmount.type = "text";
                inputAmount.name = "weeklyAmount" + i;
                container.appendChild(inputAmount);
                // Append a line break 
                container.appendChild(document.createElement("br"));
                container.appendChild(document.createElement("br"));
            }
}
