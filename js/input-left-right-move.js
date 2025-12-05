function showError(input, shake = false) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.add('error');
    if (shake) {
        formGroup.classList.add('shake');
        setTimeout(() => {
            formGroup.classList.remove('shake');
        }, 5000);
    }
}