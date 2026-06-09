const filter = document.getElementById("jobFilter");

if (filter) {
    filter.addEventListener("change", function () {

        const jobs = document.querySelectorAll(".job");

        jobs.forEach(function (job) {

            if (
                filter.value === "all" ||
                job.classList.contains(filter.value)
            ) {
                job.style.display = "block";
            } else {
                job.style.display = "none";
            }

        });

    });
}

// Simple welcome message
console.log("Welcome to the Job Filing Website");