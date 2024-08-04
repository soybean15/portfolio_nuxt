<template>
    <div class=" grid md:grid-cols-2  max-w-screen-xl px-6 py-8 mx-auto lg:gap-8 xl:gap-0   ">

        <div class="flex flex-col items-center justify-center p-10">



            <div class="md:hidden lg:mt-0 lg:col-span-5 bg-base-300 rounded-full overflow-hidden floating mb-4">
                <img class="object-top object-contain hover:object-scale-down glitch " src="~/assets/img/mob.png"
                    alt="mockup">
            </div>
            <h2
                class="floating max-w-2xl mb-4  text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl text-gradient z-10 ">
                About me</h2>

        </div>




        <div class="flex flex-col  space-y-5">


            <div class="space-y-3 border-b-[1px] border-b-accent py-3 pb-5" v-for="me in myInfo" :key="me.title">
                <div class="text-xl  md:text-2xl font-bold  text-accent">{{ me.title }}</div>

                <about-item :me="me" />


            </div>


        </div>
    </div>
</template>

<script>
import AboutItem from './AboutItem.vue'



const myInfo = [
    {
        title: 'Full Name', content: [
            {
                title: 'Marlon Padilla',

            }
        ]
    },
    {
        title: 'Current Address', content: [
            {
                title: 'Peñaranda, Nueva Ecija',

            }
        ]
    },
    {
        title: 'Academic Background', content: [
            {
                title: 'Bachelor of Science in Information Technology',
                position: 'Nueva Ecija University of Science and Technology (Aug 2020-Aug 2024)',
            }
        ]
    },

    {
        title: 'Professional Background', content: [
            // 'Currently a student pursuing Bachelor of Science in Information Technology with a focus on Web System Technology.',
            // 'Actively engaged in coursework related to Web Development.',
            // 'Currently interning at Gleent Inc. as a Laravel Developer.',

            {
                title: 'Gleent Inc.',
                position: 'Laravel Dev Intern (Jan 2024-Apr 2024)',


                // content :[
                //     {
                //         subtitle: "Assigned Projects",

                //         content:[
                //             'Barangay Information System',
                //             'ERP SaaS',
                //             'Task Management'
                //         ],

                //     }
                // ]
            },
            {
                title: 'Gleent Inc.',
                position: 'Laravel Dev (Apr 2024- Present)',
                // content :[
                //     {
                //         subtitle: "Assigned Projects",
                //         content:[
                //             'ERP SaaS',
                //             'HRIS and Payroll',
                //             'Task Management'
                //         ],

                //     }
                // ]
            },


        ]

    },
    {
        "title": "Work Projects",
        "content": [
            {
                "title": "Barangay Information System",
                "content": [
                    "A comprehensive system for managing resident data, streamlining administrative tasks, and improving service delivery for local government units."
                ]
            },
            {
                "title": "SaaS Management",
                "content": [
                    "A platform enhancing user experience and operational efficiency for client organizations."
                ]
            },
            {
                "title": "Task Management",
                "content": [
                    "A system for assigning and tracking tasks for staggered or on-call employees, ensuring efficient workload distribution and management."
                ]
            },
            {
                "title": "HRIS and Payroll",
                "content": [
                    "A Human Resource Information System (HRIS) with integrated payroll functionalities, automating HR processes and ensuring accurate payroll management."
                ]
            }
        ]
    }


]

export default {
    components: { AboutItem },

    setup() {

        return {
            myInfo
        }
    }

}
</script>

<style>
.text-gradient {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @apply bg-gradient-to-b from-accent to-success;

}
</style>