"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = void 0;
class Vector2 {
    /**
     * Creates a new vector with given x and y components.
     * @param x X component of the vector.
     * @param y Y component of the vector.
     */
    constructor(x, y) {
        /**
         * X component of the vector.
         */
        this.x = 0;
        /**
         * Y component of the vector.
         */
        this.y = 0;
        if (x)
            this.x = x;
        if (y)
            this.y = y;
    }
    /**
     * Shorthand for writing Vector(1, 0).
     */
    static get right() {
        return new Vector2(1, 0);
    }
    /**
     * Shorthand for writing Vector(-1, 0).
     */
    static get left() {
        return new Vector2(-1, 0);
    }
    /**
     * Shorthand for writing Vector(0, 1).
     */
    static get up() {
        return new Vector2(0, 1);
    }
    /**
     * Shorthand for writing Vector(0, -1).
     */
    static get down() {
        return new Vector2(0, -1);
    }
    /**
     * Shorthand for writing Vector(1, 1).
     */
    static get one() {
        return new Vector2(1, 1);
    }
    /**
     * Shorthand for writing Vector(0, 0).
     */
    static get zero() {
        return new Vector2(0, 0);
    }
    /**
     * Shorthand for writing Vector(-Infinity, -Infinity).
     */
    static get negativeInfinity() {
        return new Vector2(-Infinity, -Infinity);
    }
    /**
     * Shorthand for writing Vector(Infinity, Infinity).
     */
    static get positiveInfinity() {
        return new Vector2(Infinity, Infinity);
    }
    /**
     * Returns this vector with a magnitude of 1 (Read Only).
     */
    get normalized() {
        const mag = this.magnitude;
        if (mag > 0) {
            return new Vector2(this.x / mag, this.y / mag);
        }
        return Vector2.zero;
    }
    /**
     * Returns the length of this vector
     */
    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * Returns the squared length of this vector
     */
    get sqrMagnitude() {
        return Math.sqrt(this.magnitude);
    }
    /**
     * Returns the angle in degrees between from and to.
     * @param from The vector from which the angular difference is measured.
     * @param to The vector to which the angular difference is measured.
     * @returns The angle in degrees between the two vectors.
     */
    static Angle(from, to) {
        const dot = Vector2.Dot(from, to);
        const magFrom = from.magnitude;
        const magTo = to.magnitude;
        const RAD = 180 / Math.PI;
        return Math.acos(dot / (magFrom * magTo)) * RAD;
    }
    /**
     * Returns a copy of vector with its magnitude clamped to maxLength.
     * @param vector Vector to clamp
     * @param maxLength length to clamp to
     * @returns vector with its magnitude clamped
     */
    static ClampMagnitude(vector, maxLength) {
        const mag = vector.magnitude;
        let multiplier = 1;
        if (mag > maxLength) {
            multiplier = maxLength / mag;
        }
        return new Vector2(vector.x * multiplier, vector.y * multiplier);
    }
    /**
     * Cross Product of two vectors.
     * @param lhs Left hand side
     * @param rhs Right hand side
     * @returns
     */
    static Cross(lhs, rhs) {
        return new Vector2(lhs.x * rhs.y - rhs.x * lhs.y);
    }
    /**
     * Returns the distance between a and b.
     * @param a First vector
     * @param b Second vector
     * @returns distance between a and b
     */
    static Distance(a, b) {
        return Vector2.Subtract(a, b).magnitude;
    }
    /**
     * Dot Product of two vectors.
     * @param lhs Left hand side
     * @param rhs Right hand side
     * @returns
     */
    static Dot(lhs, rhs) {
        return lhs.x * rhs.x + lhs.y * rhs.y;
    }
    /**
     * Linearly interpolates between two points. If t is lower than 0, return a. If t is greater than 1, return b.
     * @param a Start value, returned when t = 0.
     * @param b End value, returned when t = 1.
     * @param t Value used to interpolate between a and b.
     * @returns Interpolated value, equals to a + (b - a) * t.
     */
    static Lerp(a, b, t) {
        if (t < 0)
            return a;
        if (t > 1)
            return b;
        return Vector2.DoLerp(a, b, t);
    }
    /**
     * Linearly interpolates between two points.
     * @param a Start value, returned when t = 0.
     * @param b End value, returned when t = 1.
     * @param t Value used to interpolate between a and b.
     * @returns Interpolated value, equals to a + (b - a) * t.
     */
    static DoLerp(a, b, t) {
        const subtracted = Vector2.Subtract(b, a);
        const multiplied = Vector2.Multiply(subtracted, t);
        const added = Vector2.Add(a, multiplied);
        return added;
    }
    /**
     * Linearly interpolates between two points.
     * @param a Start value, returned when t = 0.
     * @param b End value, returned when t = 1.
     * @param t Value used to interpolate between a and b.
     * @returns Interpolated value, equals to a + (b - a) * t.
     */
    static LerpUnclamped(a, b, t) {
        return Vector2.DoLerp(a, b, t);
    }
    /**
     * Returns the length of a given vector
     * @param vector the given vector
     * @returns the length of the given vector
     */
    static Magnitude(vector) {
        return vector.magnitude;
    }
    /**
     * Returns a vector that is made from the largest components of two vectors.
     * @param lhs vector 1
     * @param rhs vector 2
     * @returns a vector that is made from the largest components of two vectors.
     */
    static Max(lhs, rhs) {
        return new Vector2(lhs.x >= rhs.x ? lhs.x : rhs.x, lhs.y >= rhs.y ? lhs.y : rhs.y);
    }
    /**
     * Returns a vector that is made from the smallest components of two vectors.
     * @param lhs vector 1
     * @param rhs vector 2
     * @returns a vector that is made from the smallest components of two vectors.
     */
    static Min(lhs, rhs) {
        return new Vector2(lhs.x <= rhs.x ? lhs.x : rhs.x, lhs.y <= rhs.y ? lhs.y : rhs.y);
    }
    /**
     * Calculate a position between the points specified by current and target,
     * moving no farther than the distance specified by maxDistanceDelta.
     * @param current The position to move from.
     * @param target The position to move towards.
     * @param maxDistanceDelta Distance to move current per call.
     * @returns The new position.
     */
    static MoveTowards(current, target, maxDistanceDelta) {
        const distance = Vector2.Distance(target, current);
        return Vector2.Lerp(current, target, maxDistanceDelta / distance);
    }
    // ADD, SUBTRACT, MULTIPLY, DIVIDE (Method)
    /**
     * Add a vector or a number to this vector
     * @param rhs vector or number
     */
    Add(rhs) {
        if (typeof rhs === "number") {
            this.x += rhs;
            this.y += rhs;
        }
        else {
            this.x += rhs.x;
            this.y += rhs.y;
        }
    }
    /**
     * Subtract a vector or a number to this vector
     * @param rhs vector or number
     */
    Subtract(rhs) {
        if (typeof rhs === "number") {
            this.x -= rhs;
            this.y -= rhs;
        }
        else {
            this.x -= rhs.x;
            this.y -= rhs.y;
        }
    }
    /**
     * Multiply a vector or a number to this vector
     * @param rhs vector or number
     */
    Multiply(rhs) {
        if (typeof rhs === "number") {
            this.x *= rhs;
            this.y *= rhs;
        }
        else {
            this.x *= rhs.x;
            this.y *= rhs.y;
        }
    }
    /**
     * Divide a vector or a number to this vector
     * @param rhs vector or number
     */
    Divide(rhs) {
        if (typeof rhs === "number") {
            this.x /= rhs;
            this.y /= rhs;
        }
        else {
            this.x /= rhs.x;
            this.y /= rhs.y;
        }
    }
    // ADD, SUBTRACT, MULTIPLY, DIVIDE (Static)
    /**
     * Add two vectors or a number to a vector
     * @param a vector a
     * @param b vector or number b
     * @returns the added vector
     */
    static Add(a, b) {
        if (typeof b === "number") {
            return new Vector2(a.x + b, a.y + b);
        }
        else {
            return new Vector2(a.x + b.x, a.y + b.y);
        }
    }
    /**
     * Subtract two vectors or a number to a vector
     * @param a vector a
     * @param b vector or number b
     * @returns the subtracted vector
     */
    static Subtract(a, b) {
        if (typeof b === "number") {
            return new Vector2(a.x - b, a.y - b);
        }
        else {
            return new Vector2(a.x - b.x, a.y - b.y);
        }
    }
    /**
     * Multiply two vectors or a number and a vector
     * @param a vector a
     * @param b vector or number b
     * @returns the multiplied vector
     */
    static Multiply(a, b) {
        if (typeof b === "number") {
            return new Vector2(a.x * b, a.y * b);
        }
        else {
            return new Vector2(a.x * b.x, a.y * b.y);
        }
    }
    /**
     * Divide two vectors or a number and a vector
     * @param a vector a
     * @param b vector or number b
     * @returns the divided vector
     */
    static Divide(a, b) {
        if (typeof b === "number") {
            return new Vector2(a.x / b, a.y / b);
        }
        else {
            return new Vector2(a.x / b.x, a.y / b.y);
        }
    }
}
exports.Vector2 = Vector2;
