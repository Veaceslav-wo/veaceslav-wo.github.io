console.log('Hello from app.js');

(function () {
    console.log("This is my first calculator app");

    var $form = document.querySelector('#calculator-form');
    var $firstNumber = $form.querySelector('#first-number');
    var $secondNumber = document.getElementById('last-number');
    var $buttons = $form.querySelectorAll('[data-operation]');
    var $result = $form.querySelector('#result-number');
    var limits = {
        "min": 1,
        "max": 50
    };

    var placeholderText = 'Enter an integer from ' + limits.min + ' to ' + limits.max;
    $firstNumber.placeholder = placeholderText;
    $secondNumber.placeholder = placeholderText.replace('an', 'another');

    $form.querySelector('[type="submit"]').classList.add('d-none');

    $form.addEventListener('input', function (event) {
        if ($firstNumber.value < limits.min) {
            $firstNumber.value = limits.min;
        } else if ($firstNumber.value > limits.max) {
            $firstNumber.value = limits.max;
        }

        if ($secondNumber.value < limits.min) {
            $secondNumber.value = limits.min;
        } else if ($secondNumber.value > limits.max) {
            $secondNumber.value = limits.max;
        }
    });

    $form.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    $form.querySelectorAll('input').forEach(function ($input) {
        // if ($input.id === 'result-number') {
        //     $input.value = '';
        // } else {
        //     $input.value = limits.min;
        // }
        $input.value = '';
    });

    $buttons.forEach(function ($button) {
        $button.classList.remove('btn-primary');

        var operation = $button.dataset.operation;
        var first, second, result;
        
        if (operation === "addition") {
            $button.classList.add('btn-success');
        } else if (operation === "subtraction") {
            $button.classList.add('btn-danger');
        } else if (operation === "multiplication") {
            $button.classList.add('btn-primary');
        } else if (operation === "division") {
            $button.classList.add('btn-warning');
        }

        $button.addEventListener('click', function (event) {
            event.preventDefault();

            first = Number($firstNumber.value);
            second = Number($secondNumber.value);

            if (operation === "addition") {
                result = first + second;
            } else if (operation === "subtraction") {
                result = first - second;
            } else if (operation === "multiplication") {
                result = first * second;
            } else if (operation === "division") {
                result = first / second;
            }

            if (isNaN(result)) {
                alert ('Operation not permitted');
            } else {
                $result.classList.remove('text-danger');
                $result.classList.remove('text-success');
                $result.classList.remove('text-warning');

                if (result < 0) {
                    $result.classList.add('text-danger');
                } else if (result > 1) {
                    $result.classList.add('text-success');
                } else {
                    $result.classList.add('text-warning');
                }
                $result.value = result;
            }
        });
    });
})();
