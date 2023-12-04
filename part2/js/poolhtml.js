const pools = document.getElementById("pools");

async function generatePools() {
    let poolArray = await getPoolDetails();
    console.log(poolArray)
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
        flexValue.textContent = poolArray[i].apy + "%";

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
        stakeValue.textContent = poolArray[i].userstaked;

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
        pendingValue.textContent = poolArray[i].reward;

        cardGrid6.appendChild(pendingTitle);
        cardGrid6.appendChild(pendingValue);

        // GRID 7

        const cardGrid7 = document.createElement('div');
        cardGrid7.className = 'd-grid mx-auto';
        const totalTitle = document.createElement("h6");
        const totalValue = document.createElement("h5");
        totalValue.id = 'totalstaked' + i;
        totalTitle.textContent = 'Total Staked In Pool';
        totalValue.textContent = poolArray[i].totalstaked;

        cardGrid7.appendChild(totalTitle);
        cardGrid7.appendChild(totalValue);

        // GRID 8

        const cardGrid8 = document.createElement('div');
        cardGrid8.className = 'd-grid mx-auto';

        // MODAL

        let btnModal = document.createElement('div');
        let btnOpenPoolModal = `
            <button class="btn btn-primary" onclick=ShowModal(${i})>Open Pool</button>
            `
        btnModal.innerHTML = btnOpenPoolModal;
        cardGrid8.appendChild(btnModal);

        let modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.role = 'dialog';
        modal.id = 'autorunmodal' + i;

        let modalDialog = document.createElement("div");
        modalDialog.className = 'modal-dialog modal-dialog-centered';

        let modalContent = document.createElement("div");
        modalContent.className = "modal-content";
        modalContent.style.background = "#05014a"

        let modalHeader = document.createElement("div");
        modalHeader.className = "modal-header";

        let modalTitleLeft = document.createElement("h4");
        modalTitleLeft.textContent = 'Stake '
        let lpTokenImg = document.createElement("img");
        lpTokenImg.src = poolDb[i].lplogo;
        lpTokenImg.width = 70;
        let modalTitleRight = document.createElement("h4");
        modalTitleRight.textContent = 'Earn '
        let rwdTokenImg = document.createElement("img");
        rwdTokenImg.src = poolDb[i].rwlogo;
        rwdTokenImg.width = 70;
        let resultText = document.createElement("div");
        resultText.id = 'result';

        let modalBody = document.createElement("div");
        modalBody.className = "modal-body mx-auto col-10";
        let modalCol1 = document.createElement("div");
        modalCol1.className = "d-grid mx-auto col-9";
        let modalInput = document.createElement("input");
        modalInput.className = "form-control";
        modalInput.type = "text";
        modalInput.id = 'amt' + i;
        modalInput.placeholder = "Input Amount: Ex: 3231.19";
        modalInput.style.background = "#ffffff40";
        modalInput.style.color = "white";
        modalCol1.appendChild(modalInput);

        let poolids = '"' + (i).toString() + '"' + ',' + '"' + poolArray[i].tokenaddr + '"'
        let modalRow = document.createElement("div");
        modalRow.className = "row pb-1";
        modalRow.style.fontWeight = "800";

        let modalCol2 = document.createElement("div");
        modalCol2.className = "d-grid mx-auto col-4 mt-2";
        let btnStake = document.createElement('div');
        let btnStakeModal = `
        <button class="btn btn-dark" onclick=StakeTokens(${poolids})>STAKE</button>
        `
        btnStake.innerHTML = btnStakeModal;
        modalCol2.appendChild(btnStake);


        let modalCol3 = document.createElement("div");
        modalCol3.className = "d-grid mx-auto col-4 mt-2";
        let btnUnstake = document.createElement('div');

        let btnUnstakeModal = `
        <button class="btn btn-dark" onclick=UnstakeTokens(${poolids})>UNSTAKE</button>
        `
        btnUnstake.innerHTML = btnUnstakeModal;
        modalCol3.appendChild(btnUnstake);
        modalRow.appendChild(modalCol2);
        modalRow.appendChild(modalCol3);


        let modalCol4 = document.createElement("div");
        modalCol4.className = "d-grid mx-auto col-6";
        let autoCompoundButton = document.createElement("button");
        autoCompoundButton.className = poolDb[i].autocompclass;
        autoCompoundButton.onclick = autoCompound;
        autoCompoundButton.textContent = poolDb[i].autocompound;
        modalCol4.appendChild(autoCompoundButton);

        let modalFooter = document.createElement("div");
        modalFooter.className = "modal-footer";

        let footerCol1 = document.createElement("div");
        footerCol1.className = "d-grid col"
        let col1Title = document.createElement("h6");
        col1Title.textContent = "Your Stakings";
        let col1Info = document.createElement("h5");
        col1Info.style.color = "#02D8E9";
        col1Info.style.textShadow = "0px 0px 2px #ffffff90";
        col1Info.id = "modalstaked" + i;
        col1Info.textContent = poolArray[i].userstaked;
        footerCol1.appendChild(col1Title);
        footerCol1.appendChild(col1Info);

        let footerCol2 = document.createElement("div");
        footerCol2.className = "d-grid col"
        let col2Title = document.createElement("h6");
        col2Title.textContent = "Your Earnings";
        let col2Info = document.createElement("h5");
        col2Info.style.color = "#39FF14";
        col2Info.style.textShadow = "0px 0px 2px #ffffff90";
        col2Info.id = "reward" + i;
        col2Info.textContent = poolArray[i].reward;
        footerCol2.appendChild(col2Title);
        footerCol2.appendChild(col2Info);

        let footerCol3 = document.createElement("div");
        footerCol3.className = "d-grid col"
        let col3Title = document.createElement("h6");
        col3Title.textContent = "Multiplier";
        let col3Info = document.createElement("h4");
        col3Info.style.color = "red";
        col3Info.style.textShadow = "0px 0px 1px #ffffff";
        col3Info.id = "multiplier" + i;
        col3Info.textContent = "x" + poolArray[i].multiplier;
        footerCol3.appendChild(col3Title);
        footerCol3.appendChild(col3Info);

        let footerCol4 = document.createElement("div");
        footerCol4.className = "d-grid col"
        let col4Title = document.createElement("h6");
        col4Title.textContent = "In Your Wallet";
        let col4Info = document.createElement("h5");
        col4Info.style.color = "white";
        col4Info.style.textShadow = "0px 0px 1px #ffffff";
        col4Info.id = "userbalance" + i;
        col4Info.textContent = poolArray[i].userbalance;
        footerCol4.appendChild(col4Title);
        footerCol4.appendChild(col4Info);


        modalHeader.appendChild(modalTitleLeft);
        modalHeader.appendChild(lpTokenImg);
        modalHeader.appendChild(modalTitleRight);
        modalHeader.appendChild(rwdTokenImg);
        modalHeader.appendChild(resultText);

        modalBody.appendChild(modalCol1);
        modalBody.appendChild(modalRow);
        modalBody.appendChild(modalCol4)

        modalFooter.appendChild(footerCol1);
        modalFooter.appendChild(footerCol2);
        modalFooter.appendChild(footerCol3);
        modalFooter.appendChild(footerCol4);

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        modalDialog.appendChild(modalContent);

        modal.appendChild(modalDialog)

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
        pools.appendChild(modal);
    }
}

generatePools()


