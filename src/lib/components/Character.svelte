<svelte:head>

</svelte:head>

<!-- Language/Framework: Svelte -->
<!-- Path: ~/src/components/Character.svelte -->
<!-- Description: Character component -->
<script lang="ts">
    export let character;
</script>

<!-- This is the main structure for the component -->
<span class:character>
    {#if $$slots.posInWord}
        <slot name="posInWord"></slot>
    {/if}
    {#if $$slots.hex32le}
        <slot name="hex32le"></slot>
    {/if}
    {#if $$slots.hex32be}
        <slot name="hex32be"></slot>
    {/if}
</span>