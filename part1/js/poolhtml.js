const pools = document.getElementById("pools");

function generatePools() {
    for (let i = 0; i < poolDb.length; i++) {
        const cardSection = document.createElement("div");
        cardSection.className = "d-flex justify-content-start align-items-center p-2 mx-auto pb-1 mb-1 text-white rounded shadow-sm"
        cardSection.style.background = '#00000060';

        // GRID 1

        const cardGrid1 = document.createElement("div");
        cardGrid1.className = "d-grid col-1 mx-0"
        const grid1Header6 = document.createElement("h6");
        grid1Header6.textContent = "Stake " + poolDb[i].lptoken + " Earn " + poolDb[i].rwdtoken;

        cardGrid1.appendChild(grid1Header6);

        // GRID 2

        const cardGrid2 = document.createElement("div");
        cardGrid2.className = "d-grid mx-1"
        const grid2Logo1 = document.createElement("img");
        grid2Logo1.src = poolDb[i].lplogo;
        grid2Logo1.width = 70;

        cardGrid2.appendChild(grid2Logo1);

        // GRID 3

        const cardGrid3 = document.createElement('div');
        cardGrid3.className = 'd-grid';
        const grid2Logo2 = document.createElement("img");
        grid2Logo2.src = poolDb[i].rwlogo;
        grid2Logo2.width = 70;

        cardGrid3.appendChild(grid2Logo2);

        // GRID 4

        const cardGrid4 = document.createElement('div');
        cardGrid4.className = 'd-grid mx-auto';
        const flexTitle = document.createElement("h6");
        const flexValue = document.createElement("h6");
        flexTitle.textContent = 'Flex APY';
        flexValue.id = 'apyinfo' + i
        flexValue.textContent = '0.00%';

        cardGrid4.appendChild(flexTitle);
        cardGrid4.appendChild(flexValue);

        // GRID 5

        const cardGrid5 = document.createElement('div');
        cardGrid5.className = 'd-grid mx-auto';
        const stakeTitle = document.createElement("h6");
        const stakeValue = document.createElement("h5");
        stakeValue.style.color = '#02D8E9';
        stakeValue.style.textShadow = '0px 0px 2px #ffffff90';
        stakeValue.id = 'stakings' + i;
        stakeTitle.textContent = 'My Stakings';
        stakeValue.textContent = '0.00';

        cardGrid5.appendChild(stakeTitle);
        cardGrid5.appendChild(stakeValue);

        // GRID 6

        const cardGrid6 = document.createElement('div');
        cardGrid6.className = 'd-grid mx-auto';
        const pendingTitle = document.createElement("h6");
        const pendingValue = document.createElement("h5");
        pendingValue.style.color = '#39FF14';
        pendingTitle.textContent = 'Pending Rewards';
        pendingValue.id = 'pending' + 0;
        pendingValue.textContent = '0.00';

        cardGrid6.appendChild(pendingTitle);
        cardGrid6.appendChild(pendingValue);

        // GRID 7

        const cardGrid7 = document.createElement('div');
        cardGrid7.className = 'd-grid mx-auto';
        const totalTitle = document.createElement("h6");
        const totalValue = document.createElement("h5");
        totalValue.id = 'totalstaked' + i;
        totalTitle.textContent = 'Total Staked In Pool';
        totalValue.textContent = '0.00';

        cardGrid7.appendChild(totalTitle);
        cardGrid7.appendChild(totalValue);

        // GRID 8

        const cardGrid8 = document.createElement('div');
        cardGrid8.className = 'd-grid mx-auto';

        // Append all grids IN-ORDER to Parent (Card Section);

        cardSection.appendChild(cardGrid1);
        cardSection.appendChild(cardGrid2);
        cardSection.appendChild(cardGrid3);
        cardSection.appendChild(cardGrid4);
        cardSection.appendChild(cardGrid5);
        cardSection.appendChild(cardGrid6);
        cardSection.appendChild(cardGrid7);
        cardSection.appendChild(cardGrid8);

        // Append the cardSection to the main DOM Element "pools";

        pools.appendChild(cardSection);

    }
}

generatePools()


