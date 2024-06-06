import { IVector2 } from "../interfaces/interfaces";

export class Vector2 implements IVector2 {
    public readonly kEpsilon: number = 1e-5;
    public readonly kEpsilonNormalSqrt: number = 1e-15;

    /**
     * X component of the vector.
     */
    public x: number = 0;
    /**
     * Y component of the vector.
     */
    public y: number = 0;

    /**
     * Creates a new vector with given x and y components.
     * @param x X component of the vector.
     * @param y Y component of the vector.
     */
    constructor(x?: number, y?: number) {
        if (x) this.x = x;
        if (y) this.y = y;
    }

    /**
     * Shorthand for writing Vector(1, 0).
     */
    public static get right(): Vector2 {
        return new Vector2(1, 0);
    }

    /**
     * Shorthand for writing Vector(-1, 0).
     */
    public static get left(): Vector2 {
        return new Vector2(-1, 0);
    }

    /**
     * Shorthand for writing Vector(0, 1).
     */
    public static get up(): Vector2 {
        return new Vector2(0, 1);
    }

    /**
     * Shorthand for writing Vector(0, -1).
     */
    public static get down(): Vector2 {
        return new Vector2(0, -1);
    }

    /**
     * Shorthand for writing Vector(1, 1).
     */
    public static get one(): Vector2 {
        return new Vector2(1, 1);
    }

    /**
     * Shorthand for writing Vector(0, 0).
     */
    public static get zero(): Vector2 {
        return new Vector2(0, 0);
    }

    /**
     * Shorthand for writing Vector(-Infinity, -Infinity).
     */
    public static get negativeInfinity(): Vector2 {
        return new Vector2(-Infinity, -Infinity);
    }

    /**
     * Shorthand for writing Vector(Infinity, Infinity).
     */
    public static get positiveInfinity(): Vector2 {
        return new Vector2(Infinity, Infinity);
    }

    /**
     * Returns this vector with a magnitude of 1 (Read Only).
     */
    public get normalized(): Vector2 {
        const mag = this.magnitude;

        if (mag > 0) {
            return new Vector2(this.x / mag, this.y / mag);
        }

        return Vector2.zero;
    }

    /**
     * Returns the length of this vector
     */
    public get magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * Returns the squared length of this vector
     */
    public get sqrMagnitude(): number {
        return Math.sqrt(this.magnitude);
    }

    /**
     * Returns the angle in degrees between from and to.
     * @param from The vector from which the angular difference is measured.
     * @param to The vector to which the angular difference is measured.
     * @returns The angle in degrees between the two vectors.
     */
    public static Angle(from: Vector2, to: Vector2): number {
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
    public static ClampMagnitude(vector: Vector2, maxLength: number): Vector2 {
        const mag: number = vector.magnitude;
        let multiplier: number = 1;

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
    public static Cross(lhs: Vector2, rhs: Vector2): Vector2 {
        return new Vector2(lhs.x * rhs.y - rhs.x * lhs.y);
    }

    /**
     * Returns the distance between a and b.
     * @param a First vector
     * @param b Second vector
     * @returns distance between a and b
     */
    public static Distance(a: Vector2, b: Vector2): number {
        return Vector2.Subtract(a, b).magnitude;
    }

    /**
     * Dot Product of two vectors.
     * @param lhs Left hand side
     * @param rhs Right hand side
     * @returns
     */
    public static Dot(lhs: Vector2, rhs: Vector2): number {
        return lhs.x * rhs.x + lhs.y * rhs.y;
    }

    /**
     * Linearly interpolates between two points. If t is lower than 0, return a. If t is greater than 1, return b.
     * @param a Start value, returned when t = 0.
     * @param b End value, returned when t = 1.
     * @param t Value used to interpolate between a and b.
     * @returns Interpolated value, equals to a + (b - a) * t.
     */
    public static Lerp(a: Vector2, b: Vector2, t: number): Vector2 {
        if (t < 0) return a;
        if (t > 1) return b;

        return Vector2.DoLerp(a, b, t);
    }

    /**
     * Linearly interpolates between two points.
     * @param a Start value, returned when t = 0.
     * @param b End value, returned when t = 1.
     * @param t Value used to interpolate between a and b.
     * @returns Interpolated value, equals to a + (b - a) * t.
     */
    private static DoLerp(a: Vector2, b: Vector2, t: number): Vector2 {
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
    public static LerpUnclamped(a: Vector2, b: Vector2, t: number): Vector2 {
        return Vector2.DoLerp(a, b, t);
    }

    /**
     * Returns the length of a given vector
     * @param vector the given vector
     * @returns the length of the given vector
     */
    public static Magnitude(vector: Vector2): number {
        return vector.magnitude;
    }

    /**
     * Returns a vector that is made from the largest components of two vectors.
     * @param lhs vector 1
     * @param rhs vector 2
     * @returns a vector that is made from the largest components of two vectors.
     */
    public static Max(lhs: Vector2, rhs: Vector2): Vector2 {
        return new Vector2(
            lhs.x >= rhs.x ? lhs.x : rhs.x,
            lhs.y >= rhs.y ? lhs.y : rhs.y
        );
    }

    /**
     * Returns a vector that is made from the smallest components of two vectors.
     * @param lhs vector 1
     * @param rhs vector 2
     * @returns a vector that is made from the smallest components of two vectors.
     */
    public static Min(lhs: Vector2, rhs: Vector2): Vector2 {
        return new Vector2(
            lhs.x <= rhs.x ? lhs.x : rhs.x,
            lhs.y <= rhs.y ? lhs.y : rhs.y
        );
    }

    /**
     * Calculate a position between the points specified by current and target,
     * moving no farther than the distance specified by maxDistanceDelta.
     * @param current The position to move from.
     * @param target The position to move towards.
     * @param maxDistanceDelta Distance to move current per call.
     * @returns The new position.
     */
    public static MoveTowards(
        current: Vector2,
        target: Vector2,
        maxDistanceDelta: number
    ): Vector2 {
        const distance: number = Vector2.Distance(target, current);
        return Vector2.Lerp(current, target, maxDistanceDelta / distance);
    }

    // ADD, SUBTRACT, MULTIPLY, DIVIDE (Method)

    /**
     * Add a vector or a number to this vector
     * @param rhs vector or number
     */
    public Add(rhs: Vector2 | number): void {
        if (typeof rhs === "number") {
            this.x += rhs;
            this.y += rhs;
        } else {
            this.x += rhs.x;
            this.y += rhs.y;
        }
    }

    /**
     * Subtract a vector or a number to this vector
     * @param rhs vector or number
     */
    public Subtract(rhs: Vector2 | number): void {
        if (typeof rhs === "number") {
            this.x -= rhs;
            this.y -= rhs;
        } else {
            this.x -= rhs.x;
            this.y -= rhs.y;
        }
    }

    /**
     * Multiply a vector or a number to this vector
     * @param rhs vector or number
     */
    public Multiply(rhs: Vector2 | number): void {
        if (typeof rhs === "number") {
            this.x *= rhs;
            this.y *= rhs;
        } else {
            this.x *= rhs.x;
            this.y *= rhs.y;
        }
    }

    /**
     * Divide a vector or a number to this vector
     * @param rhs vector or number
     */
    public Divide(rhs: Vector2 | number): void {
        if (typeof rhs === "number") {
            this.x /= rhs;
            this.y /= rhs;
        } else {
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
    public static Add(a: Vector2, b: Vector2 | number): Vector2 {
        if (typeof b === "number") {
            return new Vector2(a.x + b, a.y + b);
        } else {
            return new Vector2(a.x + b.x, a.y + b.y);
        }
    }

    /**
     * Subtract two vectors or a number to a vector
     * @param a vector a
     * @param b vector or number b
     * @returns the subtracted vector
     */
    public static Subtract(a: Vector2, b: Vector2 | number): Vector2 {
        if (typeof b === "number") {
            return new Vector2(a.x - b, a.y - b);
        } else {
            return new Vector2(a.x - b.x, a.y - b.y);
        }
    }

    /**
     * Multiply two vectors or a number and a vector
     * @param a vector a
     * @param b vector or number b
     * @returns the multiplied vector
     */
    public static Multiply(a: Vector2, b: Vector2 | number): Vector2 {
        if (typeof b === "number") {
            return new Vector2(a.x * b, a.y * b);
        } else {
            return new Vector2(a.x * b.x, a.y * b.y);
        }
    }

    /**
     * Divide two vectors or a number and a vector
     * @param a vector a
     * @param b vector or number b
     * @returns the divided vector
     */
    public static Divide(a: Vector2, b: Vector2 | number): Vector2 {
        if (typeof b === "number") {
            return new Vector2(a.x / b, a.y / b);
        } else {
            return new Vector2(a.x / b.x, a.y / b.y);
        }
    }
}