class AppForm {
    constructor() {
        this.form = [];
        this.step = 0;
        this.currentGroup = null;

        this.setListeners();
        this.getForm();
        document.getElementById('next-button').disabled = true;
        this.refresh();
        this.check();
        this.pageType = window.location.href.includes('login') ? 'login' : 'signup';
    }

    submit = () => {
        const un = document.getElementById('email-input').value;
        const pw = document.getElementById('password-input').value;

        if(this.pageType === 'login') {
            firebase.auth().signInWithEmailAndPassword(un, pw).then(res => {
                document.getElementById('error-message').innerHTML = '';
                window.location.href = './loggedin.html#' + res.user.email;
             }, err => {
                document.getElementById('error-message').innerHTML = 'Incorrect login info';
            });
        }
        else if(this.pageType === 'signup') {
            firebase.auth().createUserWithEmailAndPassword(un, pw).then(res => {
                window.location.href = './loggedin.html#' + res.user.email;
            });
        }

    console.log('SUBMIT');
    }

    currentInput = () => this.form[this.step - 1].input;
    previousInput = () => this.form[this.step - 2].input;

    check = () => {
        this.currentInput().addEventListener('keyup', this.enableDisable);
    }

    enableDisable = () => {
        if(this.valid(this.currentInput())) {
            this.currentInput().classList.remove('invalid');
            this.setListeners();
            document.getElementById('next-button').disabled = false;
        }
        else {
            this.currentInput().classList.add('invalid');
            this.removeListeners();
            document.getElementById('next-button').disabled = true;
        }
    }

    valid = (input) => {
        const formType = input.id;
        const value = input.value;
        const empty = (str) => !str.split('').every(_char => _char !== ' ');

        if(!value || empty(value)) return false;
        if(this.pageType === 'login') return value && !empty(value);

        switch(formType) {
            case 'email-input':
                return /\S+@\S+\.\S+/.test(value);
            case 'email-verification-input':
                return this.previousInput().value === value;
            case 'password-input':
                return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$&]{8,}/.test(value);
            case 'password-verification-input':
                return this.previousInput().value === value;
            default:
                return false;
            
        }
    }

    goBack = () => {
        if(this.step > 1) {
            this.currentInput().value = '';
            this.step--;
            this.displayStep();
            this.enableDisable();
        }
    }

    refresh = () => {
        this.step++;
        if(this.step <= this.form.length) {
            this.displayStep();
            this.currentInput().focus();
            this.removeListeners();
            document.getElementById('next-button').disabled = true;
            this.check();
        }
        else
        this.submit();
    }

    displayStep = () => {
        if(this.currentGroup)
            this.currentGroup.style.display = 'none';
        this.currentGroup = this.form.find(_group => _group.step === this.step).element;
        this.currentGroup.style.display = 'block';
    }

    getForm = () => {
        const groups = Array.from(document.getElementsByClassName('form-group'));
        groups.forEach(_group => {
            const children = Array.from(_group.children);
            this.form.push({
                'step' : Number.parseInt(_group.dataset.step),
                'element': _group,
                'input' : children.find(_el => _el.nodeName === 'INPUT'),
            });
        });
    }

    setListeners = () => {
        document.getElementById('next-button').addEventListener('click', this.refresh);

        $(".form-control").keypress(function(event) {
            if (event.keyCode === 13) {
                $("#next-button").click();
            }
        });

        document.getElementById('back-button').addEventListener('click', this.goBack);

    }

    removeListeners = () => {
        document.getElementById('next-button').removeEventListener('click', this.refresh);
    }
}

new AppForm();