RGBA(`

    float channel(vec2 p, float dt) {
        
        vec2 cell = floor(p);
        
        dt *= length(cell)*0.1;
        
        p = fract(p) * 3.0 - 1.5;

        float r = sin(length(cell) + time * 2.0 + dt) + 1.5;

        float c = pow(abs(p.x), r) + pow(abs(p.y), r) - 1.0;

        return smoothstep(0.4, 0.2, c);
    }

    void main() {

        vec2 p = (2.0 * gl_FragCoord.xy - resolution) / resolution.y * 19.2;

        gl_FragColor = vec4(
            channel(p, 0.12),
            channel(p, 0.0),
            channel(p, -0.10),
        1.0);
    }

`);

// to change size of each cell, change value of vec2 p