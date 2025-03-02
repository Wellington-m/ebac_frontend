document.querySelectorAll("input[type='number']").forEach((input) => {
    const placeholderLength = input.placeholder.length;
    input.style.width = `${placeholderLength + 3}ch`;
});
