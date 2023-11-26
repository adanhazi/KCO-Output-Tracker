document.getElementById("theme").addEventListener("change", () => {
    const theme = document.getElementById("theme").value;
    const indicatorsContainer = document.getElementById("indicatorsContainer");

    // Clear previous indicators
    indicatorsContainer.innerHTML = "";

    // Add indicators based on the selected theme
    if (theme === "Health") {
        addIndicatorField("# of people provided with access to free health services", ["Boys", "Girls"]);
        addIndicatorField("# of children who are treated using IMNCI guidelines (Curative treatment)", ["Boys", "Girls"]);
        addIndicatorField("# of children who are referred using IMNCI guidelines.", ["Boys", "Girls"]);
        addIndicatorField("# of curative consultations (New cases + revisits)", ["Boys", "Girls"]);
        addIndicatorField("# of <5 children with diarrhoea/pneumonia/malaria having access to appropriate treatment through Save the Children supported activities or facilities.", ["Boys diarrhoea", "Girls diarrhoea", "Boys pneumonia", "Girls pneumonia", "Boys malaria", "Girls malaria"]);
        addIndicatorField("# of patients (adults) with diarrhoea/pneumonia/malaria having access to appropriate treatment through Save the Children supported activities or facilities.", ["male diarrhoea", "female diarrhoea", "male pneumonia", "female pneumonia", "male malaria", "Female malaria"]);
        addIndicatorField("# of Health education beneficiaries.", ["Male", "Female"]);
        addIndicatorField("# of women attending   ANC 3 visits during pregnancy.", ["Women"]);
        addIndicatorField(" # of women attending at least 4 ANC visits during pregnancy.", ["Women"]);
        addIndicatorField("# of all pregnant women who came for Antenatal Care and were given second dose of tetanus toxoid vaccine (TT3).", ["Women"]);
        addIndicatorField("# of women who had skilled delivery at health facility.", ["Women"]);
        addIndicatorField("# of women/newborn receiving PNC visit by trained provider within a week after delivery.", ["Women", "Newborn"]);
        addIndicatorField("# malnourished children receiving Vitamin A.", ["Boys", "Girls"]);
        addIndicatorField("# of people vaccinated with  OCV.", ["male under 38", "female under 38", "male between 38-50", "female between 38-50", "male over 50", "female over 50"]);
        addIndicatorField("# of health care providers trained on outbreak case detection, case management and surveillance.", ["Male", "Female"]);
        addIndicatorField(" # of people reached during outbreak response.", ["Boys", "Girls", "Male", "Female"]);
        addIndicatorField("# of HF and CHW providing condom and HIV prevention messages.", ["health facilities", "CHVs"]);
        addIndicatorField("  # of supported clinics able to provide BeMONC services.", ["Health facilities/clinics"]);
        addIndicatorField("# of health workers trained in IMNCI, MISP,   SGBV disaggregated by facility.", ["Male", "Female"]);
        addIndicatorField("# of health facilities which have undergone renovations.", ["Health facilities"]);
        addIndicatorField("# of Integrated Health Outreaches carried out.", ["Outreaches"]);
        addIndicatorField("# of  MOH management teams (CHMT and SCHMT trained) on response planning.", ["Male", "Female"]);
        addIndicatorField(" # of Health facilities with contingency plan in place for major outbreak-prone diseases.", ["Health Facilities"]);
        // ... (Add other indicators with disaggregation points)
    } else if (theme === "Nutrition") {
        addIndicatorField("# infants 6-59 months MUAC screened.", ["Boys", "Girls"]);
        addIndicatorField("# children 6-59 months cured from acute malnourishment.", ["Male SAM", "Female SAM", "Male MAM", "Female MAM"]);
        addIndicatorField("# children 6-59 months admitted for Acute malnourishment (OTP/SAM and TSFP/MAM).", ["Male SAM", "Female SAM", "Male MAM", "Female MAM"]);
        addIndicatorField("# PLW screened.", ["Pregnant", "Lactating"]);
        addIndicatorField("# PLW admitted in TSFP/MAM.", ["Pregnant", "Lactating"]);
        addIndicatorField("# children 6-59 months referred to Stabilization center.", ["Boys", "Girls"]);
        addIndicatorField("# children 6-59 months and PLW receiving BSFP or family ration (prevention).", ["Children", "PLW"]);
        addIndicatorField("# of caregivers with infant <34 months who actively attend IYCF education session.", ["PLW"]);
        addIndicatorField("# caregivers of infants <33 months referred for breastfeeding support.", ["Caregivers"]);
        addIndicatorField("# of pregnant women received micronutrient tablet.", ["Pregnant"]);
        addIndicatorField(" # of HF workers trained on IMAM with a focus on NiE (Nutrition in Emergencies) and IYCF.", ["Male", "Female"]);
        addIndicatorField("# of CHW trained (to support outreach sites) and Mother Led -MUAC.", ["Male", "Female"]);
        addIndicatorField("# of health facilities provided with joint monitoring visits per quarter (per county).", ["Facilities"]);
        addIndicatorField("Total # of OTP/Mobile/ outreach sites provide service in reported week.", ["Sites"]);
        addIndicatorField("Total # of stabilization sites provide service in reported week.", ["Sites"]);
        addIndicatorField("Total # TSFP sites  provide service in reported week.", ["Sites"]);
        // ... (Add other indicators with disaggregation points)
    }else if (theme === "Child Protection") {
        addIndicatorField("# of CFS established.", ["Static CFS", "Mobile CFS"]);
        addIndicatorField("# of children registered at SC CFS.", ["Boys static", "Girls static", "Boys mobile", "Girls mobile"]);
        addIndicatorField("# of children attending psychosocial activities supported by SC- e.g. formalised counselling, child to child, youth groups, children's clubs.", ["Boys", "Girls"]);
        addIndicatorField("# community-based child protection networks/structures established.", ["Total"]);
        addIndicatorField("# of community members actively participating in community based CP structures.", ["Male", "Female"]);
        addIndicatorField("# community leaders and members of community structures trained (e.g. on child protection and community mobilization skills.", ["Male", "Female"]);
        addIndicatorField("# community member participating in awareness raising sessions on child protection (psychosocial support, positive parenting etc.", ["Boys", "Girls", "Male", "Female", "Session"]);
        addIndicatorField("# community member participating in awareness raising sessions on FTR (prevention of separation; referral pathways etc.", ["Boys", "Girls", "Male", "Female", "Session"]);
        addIndicatorField("#  total cumulative separated and unaccompanied children  regstered by SC FTR.", ["Boys", "Girls"]);
        addIndicatorField("# of UASC for whom active family tracing was initiated by SC.", ["Boys", "Girls"]);
        addIndicatorField("# of UASC who were reunited with their families or guardians.", ["Boys", "Girls"]);
        addIndicatorField("# of UASC cared by foster families.", ["Boys", "Girls"]);
        addIndicatorField("# of foster families caring for UASC's trained.", ["Male", "Female"]);
        addIndicatorField("# of cases that were followed-up.", ["Cases"]);
        addIndicatorField("# of children at risk of or affected by abuse or GBV receiving support and care services from SC.", ["Boys", "Girls"]);
        addIndicatorField("# of children referred to other sectors/programmes/agencies/services for support services (health, education, livelihoods, exc.).", ["Boys", "Girls"]);
        addIndicatorField("# of child protection case workers reached with capacity building in CPiE.", ["Male teachers", "Female teachers", "Male health providers", "Female health providers", "Male caregivers", "Female caregivers"]);
        addIndicatorField("# of teachers, health providers and caregivers reached with PFA training to support children in need of psychosocial support.", ["Male teachers", "Female teachers", "Male health providers", "Female health providers", "Male caregivers", "Female caregivers"]);
        addIndicatorField("# of target households reached through outreach services with information and messages on keeping children safe.", ["HHs"]);
        addIndicatorField("# of reported cases that have been addressed through coordination and networking of the CP network.", ["Cases"]);
        addIndicatorField("# of people reached through community groups targetted with multisectoral programming that address underlying vulnerabilities.", ["Totals"]);
        addIndicatorField("# of people reached through community groups targetted with multisectoral programming that address underlying vulnerabilities.", ["Male", "Female", "Groups"]);
        addIndicatorField("#  of severely affected parents/caregivers reached with psychosocial support service.", ["Male", "Female"]);
        addIndicatorField("# of targeted community based actors trained on identifying and reporting all violence against children.", ["Male", "Female"]);
        addIndicatorField("# of drought response persons reached  with knowledge on prevention and response of sexual violence.", ["Male", "Female"]);
        // ... (Add other indicators with disaggregation points)
    }else if (theme === "FSL") {
        addIndicatorField("# of people / households receiving a cash or voucher transfers.", ["Boys", "Girls", "Male", "Female"]);
        addIndicatorField("# of animals treated.", ["animals"]);
        addIndicatorField(" # of animals vaccinated.", ["animals"]);
        addIndicatorField(" # of households receiving livestock feed.", ["HHs"]);
        addIndicatorField("#of verterinary officers and disease reporters that received refresher training.", ["Male officers", "Female officers", "Male CDR", "Female CDR"]);
        addIndicatorField("# disease reporters receiving replenished kits.", ["Male", "Female"]);
        addIndicatorField("# of households that received milking goats.", ["HHs"]);
        addIndicatorField("# people that received training in IGAs.", ["Male", "Female"]);
        addIndicatorField(" # IGA groups supported with cash grant.", ["IGA"]);
        addIndicatorField("# VSLA groups supported.", ["VSLA"]);
        addIndicatorField("Number of individuals (beneficiaries) trained in appropriate crop protection practices.", ["Male", "Female"]);
        addIndicatorField("# households receiving locally appropriate variety seeds prior to the cropping season.", ["HHs"]);
        
        // ... (Add other indicators with disaggregation points)
    }else if (theme === "Education") {
        addIndicatorField("Number of Children attending in SC Supported learning spaces.", ["Boys", "Girls", "Schools"]);
        addIndicatorField("# Children receiving learners kits (bags, stationaries).", ["Boys", "Girls", "Kits"]);
        addIndicatorField("# of children receiving school bag kits.", ["Boys", "Girls", "Kits"]);
        addIndicatorField("# Teachers/Caregivers receive teacher kit.", ["Male", "Female", "Kits"]);
        addIndicatorField("# Teachers/Education Personnel Trained on Child Rights and Protection or Other Relevant Subjects/ Frontline Responders Trainings/ Education in Emergency.", ["Male", "Female"]);
        addIndicatorField("Number of Children's Clubs established and trained.", ["Clubs"]);
        addIndicatorField("Number of Teacher Learning Circles.", ["Male", "Female"]);
        addIndicatorField("# School management committees/PTAs established or supported.", ["Committees"]);
        addIndicatorField("# of EiE WG Coordinators who have received appropriate sector coordination training.", ["Male", "Female"]);
        addIndicatorField(" # of targeted boys and girls of ECD and primary school age receiving school kits.", ["Boys", "Girls"]);
        addIndicatorField("# of targeted drought affected children who have access to recreational kits.", ["Boys", "Girls"]);
        addIndicatorField("# of schools have access to recreational kits.", ["Schools"]);
        addIndicatorField(" # of schools receiving integrated package of services.", ["Schools"]);
        addIndicatorField("# of girls and boys engaged in DRR workshops/structured activities through school clubs.", ["Boys", "Girls"]);
        addIndicatorField(" # of ECD children screened for malnutrition (at ECD centers) and treated.", ["Boys", "Girls"]);
        // ... (Add other indicators with disaggregation points)
    }else if (theme === "WASH") {
        addIndicatorField("# of Schools / TLS / CFS that receive WASH infrastructure support.", ["Institutions", "Latrines"]);
        addIndicatorField("# of health/nutrition facilities that receive WASH support (water supplies, and sanitation and rehabilitation).", ["Facilities"]);
        addIndicatorField("# of education facilities that receive WASH support (water supplies, and sanitation and rehabilitation).", ["Education facilities"]);
        addIndicatorField("# of water source repaired/constructed/rehabilitated in camps, communities, schools, daycare centres, health facilities.", ["water source"]);
        addIndicatorField("# of persons and HHs provided with sufficient and safe water for drinking, cooking and personal hygiene use (7.5ltrs to 35ltrs/p/day) by emergency water trucking.", ["Male", "Female"]);
        addIndicatorField("# of new water source developed/constructed in the target community.", ["water source"]);
        addIndicatorField("# of water user committee trained.", ["Male", "Female"]);
        addIndicatorField("# of latrines rehabilitated.", ["latrines"]);
        addIndicatorField("# of latrines constructed.", ["latrines"]);
        addIndicatorField("# of people received hygiene kits/items.", ["Male", "Female"]);
        addIndicatorField("#  of people reached with hygiene messages -hygiene promotion activities carried out in community through direct and indirect means.", ["Boys", "Girls", "Male", "Female"]);
        addIndicatorField("#  of community hygiene volunteers trained.", ["Male", "Boys"]);
        addIndicatorField("# of hygiene clubs formed and activated.", ["clubs"]);
        addIndicatorField("# of institutions supported with hygiene ites (hygiene and cleaning materials and tools).", ["institution"]);
        addIndicatorField("# of Sub- counties that have a contingency stock of WASH materials.", ["sub-counties"]);
        addIndicatorField("# of institutions supported with emergency water supply.", ["institutions"]);
        // ... (Add other indicators with disaggregation points)
    }
    // ... (Repeat for other themes)
});

function addIndicatorField(indicatorName, disaggregationPoints) {
    const indicatorsContainer = document.getElementById("indicatorsContainer");

    const inputContainer = document.createElement("div"); // Create a container for inputs
    inputContainer.className = "input-container"; // Add the CSS class

    disaggregationPoints.forEach((point) => {
        const labelContainer = document.createElement("div"); // Create a container for the label and input
        labelContainer.className = "label-container"; // Add the CSS class

        const disaggregationLabel = document.createElement("label");
        disaggregationLabel.for = `${indicatorName} - ${point}`;
        disaggregationLabel.className = "disaggregation-label"; // Add the CSS class
        disaggregationLabel.textContent = point; // Display disaggregation name
        labelContainer.appendChild(disaggregationLabel);

        const inputField = document.createElement("input");
        inputField.type = "number";
        inputField.name = `${indicatorName} - ${point}`;
        inputField.placeholder = point; // Set the placeholder attribute
        inputField.required = true;
        inputField.className = "indicators-input"; // Add the CSS class
        labelContainer.appendChild(inputField);

        inputContainer.appendChild(labelContainer);
    });

    const label = document.createElement("label");
    label.for = `${indicatorName}`;
    label.className = "indicators-label"; // Add the CSS class
    label.textContent = `${indicatorName}:`;
    indicatorsContainer.appendChild(label);

    indicatorsContainer.appendChild(inputContainer);

    const br = document.createElement("br");
    indicatorsContainer.appendChild(br);
}

document.getElementById("indicatorForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const officeName = document.getElementById("officeName").value;
    const theme = document.getElementById("theme").value;

    const indicators = [];

    // Extract indicator names and values dynamically based on the selected theme
    const inputs = event.target.querySelectorAll("input[type='number']");
    inputs.forEach((input) => {
        const indicatorParts = input.name.split(" - ");
        const indicatorName = indicatorParts[0];
        const disaggregationPoint = indicatorParts[1];
        
        indicators.push({
            indicatorName,
            disaggregationPoint,
            value: Number(input.value),
        });
    });

    const data = {
        officeName,
        theme,
        indicators,
    };

    // Send data to the back-end using fetch API
    fetch("/api/submitIndicator", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((result) => {
        // Handle the response from the server, if needed
        console.log(result);
    })
    .catch((error) => {
        // Handle any errors that occur during the fetch
        console.error("Error submitting data:", error);
    });
});
