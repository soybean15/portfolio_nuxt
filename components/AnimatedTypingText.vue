<template>
    <div>
        <span>{{ typedText }}</span><span v-if="showCursor" class="blink">|</span>
    </div>
</template>
  
<script >
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    props: ['words'],
    setup(props) {


        const words = ref(props.words); // Array of words to cycle through
        const wordIndex = ref(0); // Index of the current word
        const typedText = ref(""); // Text that will be displayed with typing animation
        const currentIndex = ref(0); // Index of the current character being typed
        const typingSpeed = 200; // Typing speed in milliseconds
        const backspacingSpeed = 100; // Backspacing speed in milliseconds
        const showCursor = ref(true); // Whether to show cursor or not

        // Function to start typing animation
        const startTyping = () => {
            const intervalId = setInterval(() => {
                if (currentIndex.value < words.value[wordIndex.value].length) {
                    typedText.value += words.value[wordIndex.value][currentIndex.value];
                    currentIndex.value++;
                } else {
                    clearInterval(intervalId);
                    startBackspacing();
                }
            }, typingSpeed);
        };

        // Function to start backspacing animation
        const startBackspacing = () => {
            const intervalId = setInterval(() => {
                if (typedText.value.length > 0) {
                    typedText.value = typedText.value.slice(0, -1);
                } else {
                    clearInterval(intervalId);
                    currentIndex.value = 0;
                    wordIndex.value = (wordIndex.value + 1) % words.value.length; // Cycle to the next word
                    startTyping();
                }
            }, backspacingSpeed);
        };

        // Start typing animation when component is mounted
        onMounted(() => {
            startTyping();
        });

        // Clean up when component is unmounted
        onUnmounted(() => {
            currentIndex.value = 0;
            typedText.value = "";
            showCursor.value = true;
        });

        return {
            showCursor,
            typedText
        }

    }
}

</script>
  
<style>
.blink {
    animation: blink-animation 1s steps(5, start) infinite;
}

@keyframes blink-animation {
    to {
        visibility: hidden;
    }
}
</style>
  