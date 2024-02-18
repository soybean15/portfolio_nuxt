<template>
    <div class=" grid  max-w-screen-xl px-6 py-8 mx-auto lg:gap-8 xl:gap-0 mt-16 ">

        <div class="flex flex-col justify-center py-5  p-10   w-full ">

            <h2
                class="max-w-2xl mb-4 text-3xl font-extrabold self-center md:self-start leading-none md:text-3xl xl:text-5xl text-base-content z-10 ">
                Projects</h2>

        </div>
        <div class="grid  lg:grid-cols-2 ">

            
            <div class="sm:m-0.5" v-for="project in projects" :key="project.title">
<!-- 
                <project :project="project"  v-motion-fade-visible/> -->


                <project-card :project="project" v-motion-fade-visible/>
            </div>
        </div>




    </div>
</template>

<script>


const projects = [
    {
        title: "CScreen",
        description: "Text-base UI on Console",
        thumbnail: 'https://user-images.githubusercontent.com/75112014/183237756-a8ac0d03-fb91-4257-b388-3505bd1547ae.png',
        type: "console",
        stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
        repository: [
            {
                label: "repo",
                link: "https://github.com/soybean15/CScreen",
            },

        ],
    },
    {
        title: "Lucky 9",
        description: "Java console-based Lucky 9 game",
        type: "console",
        stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
        thumbnail: 'https://user-images.githubusercontent.com/75112014/285388794-43662063-2c72-4f2e-8459-3d6f3d4ec958.png',
        repository: [
            {
                label: "repo",
                link: "https://github.com/soybean15/LuckyNineConsole",
            },

        ],
    },
    {
        title: "Lover Bot",
        description: "SimpleChat bot on java console",
        thumbnail: 'https://user-images.githubusercontent.com/75112014/285391723-4f743f21-09b9-4b8c-bb14-bb9fac37d672.png',
        type: "console",
        stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
        repository: [
            {
                label: "repo",
                link: "https://github.com/soybean15/LoverBot",
            },

        ],
    },
    {
        title: "ConnectFour Console",
        thumbnail: 'https://user-images.githubusercontent.com/75112014/285387660-68478624-a962-4293-bad4-634f680681de.png',
        description: "Connect Four Console Game in Java",
        type: "console",
        stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
        repository: [
            {
                label: "repo",
                link: "https://github.com/soybean15/ConnectFour-Console-game-",
            },

        ],
    },
    {
        title: "Java Swing Pagination",
        description: "A public, simple pagination library for Java Swing projects.",
        type: "desktop",
        thumbnail: 'https://user-images.githubusercontent.com/75112014/219864078-581f2bd8-073c-42b9-a7b2-19be0dcaaa90.png',
        stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
        repository: [
            {
                label: "repo",
                link: "https://github.com/soybean15/Java-swing-pagination",
            },

        ],
    },
    {
        title: "PNHS EMS",
        description: "Manage teachers service credits",
        thumbnail: 'https://user-images.githubusercontent.com/75112014/285397230-6acd45af-f459-4199-877c-2910aedcf880.png',
        type: "desktop",
        stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
        repository: [
            {
                label: "repo",
                link: "https://github.com/soybean15/PNHSems",
            },

        ],
    },
    {
        title: "PNHS Voting System",
        description: "A simple voting web application",
        type: "Web",
        thumbnail: 'https://user-images.githubusercontent.com/75112014/285394615-f6b3ade9-00db-45f4-9b44-3c3b2929be23.png',
        stacks: [
            { name: "vuejs.org", label: "Vue", link: "https://vuejs.org" },
            { name: "laravel.com", label: "Laravel", link: "https://laravel.com" },
            {
                name: "tailwindcss.com",
                label: "Tailwind",
                link: "https://tailwindcss.com",
            },
            {
                name: "daisyui.com",
                label: "DaisyUi",
                link: "https://daisyui.com",
            },
        ],
        repository: [
            {
                label: "client",
                link: "https://github.com/soybean15/voting-system-fe",
            },
            {
                label: "api",
                link: "https://github.com/soybean15/voting-system-restapihttps://github.com/soybean15/voting-system-restapi",
            },
        ],
    },
    {
        title: "Maxilife Online Appointment And Patient Record",
        description: "Appointment system for Maxilife Clinic",
        thumbnail: 'https://user-images.githubusercontent.com/75112014/288383072-b5413536-57bf-42f0-bfc3-1a9722ad0a79.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE4NjMyMjIsIm5iZiI6MTcwMTg2MjkyMiwicGF0aCI6Ii83NTExMjAxNC8yODgzODMwNzItYjU0MTM1MzYtNTdiZi00MmYwLWJmYzMtMWE5NzIyYWQwYTc5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA2VDExNDIwMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA1ZTMxNjA5ZTg4NTU1ZTE0NmViMTdhNGVhYTExYTAxZjJiYzA0NjBjOGEwNGQzMzNiYjU2NzY0MjZiMDI0ZWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.xhglf0abZqnfH1fqbGBwndjDadgk7wHWUh8g38ZdkLs',
        type: "Web",
        stacks: [
            { name: "vuejs.org", label: "Vue", link: "https://vuejs.org" },
            { name: "laravel.com", label: "Laravel", link: "https://laravel.com" },
            {
                name: "tailwindcss.com",
                label: "Tailwind",
                link: "https://tailwindcss.com",
            },
            { name: "quasar.dev", label: "Quasar", link: "https://quasar.dev" },
        ],
        repository: [
            {
                label: "client",
                link: "https://github.com/soybean15/online-appointment-patient-record-spa",
            },
            {
                label: "private repo",
                link: "https://github.com",
            },
        ],
    },
    {
        title: "PAEC Instructor Schedule Management",
        description: "Managing Employee Schedules",
        thumbnail: 'https://user-images.githubusercontent.com/75112014/287516516-485a065d-11e8-4d4f-ac07-73a88956468c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2MDU4MzcsIm5iZiI6MTcwMTYwNTUzNywicGF0aCI6Ii83NTExMjAxNC8yODc1MTY1MTYtNDg1YTA2NWQtMTFlOC00ZDRmLWFjMDctNzNhODg5NTY0NjhjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjAzVDEyMTIxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMxNTkwZTRmZTNlNTIxZDZiODA3YzkxOWUxYTM0ZDdhZWJiZTFmODAwMmY0YzA5YTg4NzM1OGExOWZlNjU3ZjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.EVaHFEzKLqj3HQneF9ugYsJVwfDRSqJyOGMBCXYs6UQ',
        type: "Web",
        stacks: [
            { name: "vuejs.org", label: "Vue", link: "https://vuejs.org" },
            { name: "laravel.com", label: "Laravel", link: "https://laravel.com" },
            {
                name: "tailwindcss.com",
                label: "Tailwind",
                link: "https://tailwindcss.com",
            },
            { name: "quasar.dev", label: "Quasar", link: "https://quasar.dev" },

        ],
        repository: [
            {
                label: "client",
                link: "https://github.com/soybean15/paec-instructor-monitoring-client",
            },
            {
                label: "api",
                link: "https://github.com/soybean15/paec-instructor-monitoring-api",
            },
        ],
    },
    {
        title: "PNHS Document control",
        description: "Verify documents with qr code",
        type: "Web",
        thumbnail: 'https://user-images.githubusercontent.com/75112014/287519554-fd1a8aac-e045-40e7-98b6-f806e320bdca.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2MDg5ODAsIm5iZiI6MTcwMTYwODY4MCwicGF0aCI6Ii83NTExMjAxNC8yODc1MTk1NTQtZmQxYThhYWMtZTA0NS00MGU3LTk4YjYtZjgwNmUzMjBiZGNhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjAzVDEzMDQ0MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNhNWMzOTNmZmNlOGI2MjlhMDNjMDE1MjVlMjA3OTk0OWZjNjNhZTllMTExNWJlMDllZjllYmZhMmE2MjIwZmImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.0HNPmhEL-ZEzgwPX7YnSjhd-mDFSORmQ5UMITVC2ymE',
        stacks: [
            { name: "vuejs.org", label: "Vue", link: "https://vuejs.org" },
            { name: "laravel.com", label: "Laravel", link: "https://laravel.com" },
            {
                name: "tailwindcss.com",
                label: "Tailwind",
                link: "https://tailwindcss.com",
            },
            { name: "quasar.dev", label: "Quasar", link: "https://quasar.dev" },
            { name: "inertiajs.com", label: "Inertiajs", link: "https://inertiajs.com/" },
        ],
        repository: [
            {
                label: "repo",
                link: "https://github.com/soybean15/document-control",
            }

        ],
    },
    {
        title: "PNHS Realtime biometrics",
        description: "Attendance Monitoring with real time biometrics",
        type: "Web",
        thumbnail: 'https://user-images.githubusercontent.com/75112014/289338431-ac243cf1-e575-4286-a4a0-b8a95c860230.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIxODQ3MjMsIm5iZiI6MTcwMjE4NDQyMywicGF0aCI6Ii83NTExMjAxNC8yODkzMzg0MzEtYWMyNDNjZjEtZTU3NS00Mjg2LWE0YTAtYjhhOTVjODYwMjMwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjEwVDA1MDAyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA1Y2U2OTEyMzA5NzllYTQ2ODU4MzMzMmYxYjkxZTU3MzgzM2VhYmM5NGUzMzJhYmMxNjdkYWNhYmM2MzM2YWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.OCwmF5E0f72iJ3-tV8CNzWIziy_YjucsHVi4TzFGxUk',
        stacks: [
            { name: "vuejs.org", label: "Vue", link: "https://vuejs.org" },
            { name: "laravel.com", label: "Laravel", link: "https://laravel.com" },
            {
                name: "tailwindcss.com",
                label: "Tailwind",
                link: "https://tailwindcss.com",
            },
            { name: "quasar.dev", label: "Quasar", link: "https://quasar.dev" },
            { name: "soketi.app", label: "Soketi", link: "https://docs.soketi.app/" },
        ],
        repository: [
            {
                label: "client",
                link: "https://github.com/soybean15/realtime-biometrics-client",
            },
            {
                label: "api",
                link: "https://github.com/soybean15/realtime-biometrics-api",
            },
        ],
    },

    {
        title: "Sukii",
        description: "Application for Sari Sari store Management, Development still on going",
        type: "Web",
       
        thumbnail: 'https://-user-images.githubusercontent.com/75112014/305708305-b3bff555-9722-465c-9170-55bd7382026f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDgyNTM2NTQsIm5iZiI6MTcwODI1MzM1NCwicGF0aCI6Ii83NTExMjAxNC8zMDU3MDgzMDUtYjNiZmY1NTUtOTcyMi00NjVjLTkxNzAtNTViZDczODIwMjZmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMTglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjE4VDEwNDkxNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTcxOTA0ZWRkZTQ4YTQ5OGQxM2ZmN2FlYTRhYWQyYzhkNGJkMjQ3MjUxYjJiYzFlNDhhMzY4YjgwZDdmZjUwYWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.p6BhaClkqbrKzzaqlCXNN0B62jqndk-Xcs3t6e6Us6A',
   
        stacks: [
            { name: "vuejs.org", label: "Vue", link: "https://vuejs.org" },
           
            {
                name: "daisyui.com",
                label: "DaisyUi",
                link: "https://daisyui.com",
            },
         
        ],
        repository: [
            {
                label: "Visit",
                link: "https://saree-five.vercel.app/#/pautang",
            },
         
        ],
    },
];
export default {

    setup() {
        return {
            projects
        }
    }

}
</script>

<style scoped>




.grid-move {
  background-color: #6B7280!important;
  transform: scale(0.9);
}


</style>