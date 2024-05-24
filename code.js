var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.thingspeak.com/channels/2524856/feeds.json?api_key=7KIFMGQNF85Z1VH2", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // Parse the JSON response
        var response = JSON.parse(xhr.responseText);
        
        // Extract the relevant data (assuming the structure of the response)
        var feeds = response.feeds;
        feeds.reverse();
        var dataContainer = document.getElementById('data')
        console.log(feeds)
        // var dataString = "";
        feeds.forEach(function(feed) {
            var main = document.createElement("div");
            main.classList.add('main')

            var dateString = feed.created_at;
            var date = new Date(dateString);

            var year = date.getFullYear();
            var month = date.getMonth() + 1; 
            var day = date.getDate();
            var hour = date.getHours();
            var minute = date.getMinutes();
            var second = date.getSeconds();
            var finaldate=year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day)
            var finaltime=(hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second)
            
            var datediv = document.createElement("div");
            datediv.classList.add("con")
            datediv.innerHTML=`<p class="value1">${finaldate}</p>  Date`
           
            var timediv = document.createElement("div");
            timediv.classList.add("con")
            timediv.innerHTML=`<p class="value1">${finaltime}</p>  Time`

            var entryDiv = document.createElement("div");
            entryDiv.classList.add("con")
            entryDiv.innerHTML=`<p class="value">${feed.field1}</p>  ${response.channel.field1}`

            var entryDiv2 = document.createElement("div");
            entryDiv2.classList.add("con")
            entryDiv2.innerHTML=`<p class="value">${feed.field2}</p>  ${response.channel.field2}`

            var entryDiv3 = document.createElement("div");
            entryDiv3.classList.add("con")
            entryDiv3.innerHTML=`<p class="value">${feed.field3}</p>  ${response.channel.field3}`

            var entryDiv4 = document.createElement("div");
            entryDiv4.classList.add("con")
            entryDiv4.innerHTML=`<p class="value">${feed.field4}</p>  ${response.channel.field4}`

            var entryDiv5 = document.createElement("div");
            entryDiv5.classList.add("con")
            entryDiv5.innerHTML=`<p class="value">${feed.field5}</p>  ${response.channel.field5}`

            var entryDiv6 = document.createElement("div");
            entryDiv6.classList.add("con")
            entryDiv6.innerHTML=`<p class="value">${feed.field6}</p>  ${response.channel.field6}`

            var entryDiv7 = document.createElement("div");
            entryDiv7.classList.add("con")
            entryDiv7.innerHTML=`<p class="value">${feed.field7}</p>  ${response.channel.field7} `
           
            // dataString += "Entry ID: " + feed.entry_id + response.channel.field1 + feed.field1 + response.channel.field2+ feed.field2 + "<br>";
            main.appendChild(datediv);
            main.appendChild(timediv);
            main.appendChild(entryDiv);
            main.appendChild(entryDiv2);
            main.appendChild(entryDiv3);
            main.appendChild(entryDiv4);
            main.appendChild(entryDiv5);
            main.appendChild(entryDiv6);
            main.appendChild(entryDiv7);
            dataContainer.appendChild(main);
        });

        // Display the data on the webpage
        // document.getElementById("data").innerHTML = dataString;
    }
    
};
xhr.send();