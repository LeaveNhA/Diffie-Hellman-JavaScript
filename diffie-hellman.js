export class DiffieHellman {
    constructor(p, q) {
        this.p = p,
        this.q = q,
        this.checkArguments();
    }

    isInRange(num) {
        if ((num < 1) || (num > 9998))
            throw new Error("Numbers not in range");

        return num;
    }

    isPrime(num) {
        if ((num > 2) && (num % 2 === 0) || (num % 3 === 0))
            throw new Error("Number is not prime");

        return num;
    }

    checkArguments() {
        const args = [this.p, this.q];

        args.map(this.isInRange).map(this.isPrime);
    }

    getPublicKeyFromPrivateKey(privateKey) {
        if (privateKey <= 1 || privateKey >= this.p)
            throw new Error("Remove this statement and implement this function");

        return this.q ** privateKey % this.p;
    }

    getSharedSecret(privateKey, publicKey) {
        return publicKey ** privateKey % this.p;
    }
}
