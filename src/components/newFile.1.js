/* __placeholder__ */
export default (await import('vue')).defineComponent({
name: "ConversorComponent",
props: ["moedaA", "moedaB"],
data() {
return {
moedaA_value: "",
moedaB_value: 0
};

},
methods: {
converter() {
}
}
});
