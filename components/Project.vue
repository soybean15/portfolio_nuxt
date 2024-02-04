<template>
    <div class="flip-card aspect-video w-full h-64">
        <div class="flip-card-inner">
            <div class="flip-card-front relative">
                <div class="absolute h-full w-full bg-gradient-to-t from-black to-transparent"></div>
                <div class=" absolute h-16 w-full bottom-0   px-3" >

                    <div class="text-white flex font-bold text-lg truncate" >{{ project.title }}</div>
                    <div class="flex">  <div class="badge badge-accent">{{project.type}}</div></div>
                  
                </div>
                <img class="object-cover  object-top w-full h-full" :src="project.thumbnail"/>
            </div>
            <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
            </div>
        </div>
    </div>
</template>
    
<script>

export default {

    props:['project']
}
</script>
    
<style>
.flip-card {
    background-color: transparent;


    border: 1px solid #f1f1f1;
    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
    background-color: #bbb;
    color: black;
}

/* Style the back side */
.flip-card-back {
  
    color: white;
    transform: rotateY(180deg);
}
</style>