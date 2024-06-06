import { IVector4 } from "../interfaces/interfaces";

export class Vector4 implements IVector4 {
    /**
     * X component of the vector.
     */
    public x: number = 0;
    /**
     * Y component of the vector.
     */
    public y: number = 0;
    /**
     * Z component of the vector.
     */
    public z: number = 0;
    /**
     * W component of the vector.
     */
    public w: number = 1;

    /**
     * Creates a new vector with given x, y, z and w components.
     * @param x X component of the vector.
     * @param y Y component of the vector.
     * @param z Z component of the vector.
     * @param w W component of the vector.
     */
    constructor(x?: number, y?: number, z?: number, w?: number) {
        if (x) this.x = x;
        if (y) this.y = y;
        if (z) this.z = z;
        if (w) this.w = w;
    }

    /**
     * Shorthand for writing Vector4(1, 1, 1, 1).
     */
    public static get one(): Vector4 {
        return new Vector4(1, 1, 1, 1);
    }

    /**
     * Shorthand for writing Vector4(0, 0, 0, 0).
     */
    public static get zero(): Vector4 {
        return new Vector4(0, 0, 0, 0);
    }

    /**
     * Shorthand for writing Vector4(-Infinity, -Infinity, -Infinity, -Infinity).
     */
    public static get negativeInfinity(): Vector4 {
        return new Vector4(-Infinity, -Infinity, -Infinity, -Infinity);
    }

    /**
     * Shorthand for writing Vector4(Infinity, Infinity, Infinity, Infinity).
     */
    public static get positiveInfinity(): Vector4 {
        return new Vector4(Infinity, Infinity, Infinity, Infinity);
    }

    /**
     * Returns this vector with a magnitude of 1 (Read Only).
     */
    public get normalized(): Vector4 {
        const mag = this.magnitude;

        if (mag > 0) {
            return new Vector4(
                this.x / mag,
                this.y / mag,
                this.z / mag,
                this.w / mag
            );
        }

        return Vector4.zero;
    }

    /**
     * Returns the length of this vector
     */
    public get magnitude(): number {
        return Math.sqrt(
            this.x * this.x +
            this.y * this.y +
            this.z * this.z +
            this.w * this.w
        );
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
    public static Angle(from: Vector4, to: Vector4): number {
        const dot = Vector4.Dot(from, to);
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
    public static ClampMagnitude(vector: Vector4, maxLength: number): Vector4 {
        const mag: number = vector.magnitude;
        let multiplier: number = 1;

        if (mag > maxLength) {
            multiplier = maxLength / mag;
        }

        return new Vector4(
            vector.x * multiplier,
            vector.y * multiplier,
            vector.z * multiplier,
            vector.w * multiplier
        );
    }

    /**
     * Returns the distance between a and b.
     * @param a First vector
     * @param b Second vector
     * @returns distance between a and b
     */
    public static Distance(a: Vector4, b: Vector4): number {
        return Vector4.Subtract(a, b).magnitude;
    }

    /**
     * Dot Product of two vectors.
     * @param lhs Left hand side
     * @param rhs Right hand side
     * @returns
     */
    public static Dot(lhs: Vector4, rhs: Vector4): number {
        return lhs.x * rhs.x + lhs.y * rhs.y + lhs.z * rhs.z + lhs.w * rhs.w;
    }

    /**
     * Linearly interpolates between two points. If t is lower than 0, return a. If t is greater than 1, return b.
     * @param a Start value, returned when t = 0.
     * @param b End value, returned when t = 1.
     * @param t Value used to interpolate between a and b.
     * @returns Interpolated value, equals to a + (b - a) * t.
     */
    public static Lerp(a: Vector4, b: Vector4, t: number): Vector4 {
        if (t < 0) return a;
        if (t > 1) return b;

        return Vector4.DoLerp(a, b, t);
    }

    /**
     * Linearly interpolates between two points.
     * @param a Start value, returned when t = 0.
     * @param b End value, returned when t = 1.
     * @param t Value used to interpolate between a and b.
     * @returns Interpolated value, equals to a + (b - a) * t.
     */
    private static DoLerp(a: Vector4, b: Vector4, t: number): Vector4 {
        const subtracted = Vector4.Subtract(b, a);
        const multiplied = Vector4.Multiply(subtracted, t);
        const added = Vector4.Add(a, multiplied);

        return added;
    }

    /**
     * Linearly interpolates between two points.
     * @param a Start value, returned when t = 0.
     * @param b End value, returned when t = 1.
     * @param t Value used to interpolate between a and b.
     * @returns Interpolated value, equals to a + (b - a) * t.
     */
    public static LerpUnclamped(a: Vector4, b: Vector4, t: number): Vector4 {
        return Vector4.DoLerp(a, b, t);
    }

    /**
     * Returns the length of a given vector
     * @param vector the given vector
     * @returns the length of the given vector
     */
    public static Magnitude(vector: Vector4): number {
        return vector.magnitude;
    }

    /**
     * Returns a vector that is made from the largest components of two vectors.
     * @param lhs vector 1
     * @param rhs vector 2
     * @returns a vector that is made from the largest components of two vectors.
     */
    public static Max(lhs: Vector4, rhs: Vector4): Vector4 {
        return new Vector4(
            lhs.x >= rhs.x ? lhs.x : rhs.x,
            lhs.y >= rhs.y ? lhs.y : rhs.y,
            lhs.z >= rhs.z ? lhs.z : rhs.z,
            lhs.w >= rhs.w ? lhs.w : rhs.w
        );
    }

    /**
     * Returns a vector that is made from the smallest components of two vectors.
     * @param lhs vector 1
     * @param rhs vector 2
     * @returns a vector that is made from the smallest components of two vectors.
     */
    public static Min(lhs: Vector4, rhs: Vector4): Vector4 {
        return new Vector4(
            lhs.x <= rhs.x ? lhs.x : rhs.x,
            lhs.y <= rhs.y ? lhs.y : rhs.y,
            lhs.z <= rhs.z ? lhs.z : rhs.z,
            lhs.w <= rhs.w ? lhs.w : rhs.w,
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
        current: Vector4,
        target: Vector4,
        maxDistanceDelta: number
    ): Vector4 {
        const distance: number = Vector4.Distance(target, current);
        return Vector4.Lerp(current, target, maxDistanceDelta / distance);
    }

    // ADD, SUBTRACT, MULTIPLY, DIVIDE (Method)

    /**
     * Add a vector or a number to this vector
     * @param rhs vector or number
     */
    public Add(rhs: Vector4 | number): void {
        if (typeof rhs === "number") {
            this.x += rhs;
            this.y += rhs;
            this.z += rhs;
            this.w += rhs;
        } else {
            this.x += rhs.x;
            this.y += rhs.y;
            this.z += rhs.z;
            this.w += rhs.w;
        }
    }

    /**
     * Subtract a vector or a number to this vector
     * @param rhs vector or number
     */
    public Subtract(rhs: Vector4 | number): void {
        if (typeof rhs === "number") {
            this.x -= rhs;
            this.y -= rhs;
            this.z -= rhs;
            this.w -= rhs;
        } else {
            this.x -= rhs.x;
            this.y -= rhs.y;
            this.z -= rhs.z;
            this.w -= rhs.w;
        }
    }

    /**
     * Multiply a vector or a number to this vector
     * @param rhs vector or number
     */
    public Multiply(rhs: Vector4 | number): void {
        if (typeof rhs === "number") {
            this.x *= rhs;
            this.y *= rhs;
            this.z *= rhs;
            this.w *= rhs;
        } else {
            this.x *= rhs.x;
            this.y *= rhs.y;
            this.z *= rhs.z;
            this.w *= rhs.w;
        }
    }

    /**
     * Divide a vector or a number to this vector
     * @param rhs vector or number
     */
    public Divide(rhs: Vector4 | number): void {
        if (typeof rhs === "number") {
            this.x /= rhs;
            this.y /= rhs;
            this.z /= rhs;
            this.w /= rhs;
        } else {
            this.x /= rhs.x;
            this.y /= rhs.y;
            this.z /= rhs.z;
            this.w /= rhs.w;
        }
    }

    // ADD, SUBTRACT, MULTIPLY, DIVIDE (Static)

    /**
     * Add two vectors or a number to a vector
     * @param a vector a
     * @param b vector or number b
     * @returns the added vector
     */
    public static Add(a: Vector4, b: Vector4 | number): Vector4 {
        if (typeof b === "number") {
            return new Vector4(a.x + b, a.y + b, a.z + b, a.w + b);
        } else {
            return new Vector4(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
        }
    }

    /**
     * Subtract two vectors or a number to a vector
     * @param a vector a
     * @param b vector or number b
     * @returns the subtracted vector
     */
    public static Subtract(a: Vector4, b: Vector4 | number): Vector4 {
        if (typeof b === "number") {
            return new Vector4(a.x - b, a.y - b, a.z - b, a.w - b);
        } else {
            return new Vector4(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
        }
    }

    /**
     * Multiply two vectors or a number and a vector
     * @param a vector a
     * @param b vector or number b
     * @returns the multiplied vector
     */
    public static Multiply(a: Vector4, b: Vector4 | number): Vector4 {
        if (typeof b === "number") {
            return new Vector4(a.x * b, a.y * b, a.z * b, a.w * b);
        } else {
            return new Vector4(a.x * b.x, a.y * b.y, a.z * b.z, a.w * b.w);
        }
    }

    /**
     * Divide two vectors or a number and a vector
     * @param a vector a
     * @param b vector or number b
     * @returns the divided vector
     */
    public static Divide(a: Vector4, b: Vector4 | number): Vector4 {
        if (typeof b === "number") {
            return new Vector4(a.x / b, a.y / b, a.z / b, a.w / b);
        } else {
            return new Vector4(a.x / b.x, a.y / b.y, a.z / b.z, a.w / b.w);
        }
    }
}