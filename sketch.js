const r = require("raylib");

function getWindowDimenstions(circlesCount, circlesThickness) {
	return 2 * circlesCount * circlesThickness;
}

const circles = {
	count: 15,
	thickness: 30,
};

const window = {};

function init() {
	window.width = getWindowDimenstions(circles.count, circles.thickness);
	window.height = getWindowDimenstions(circles.count, circles.thickness);
	windowTitle = "Target with Circles";

	window.maxWidth = 1000;
	window.maxHeight = 1000;

	circles.x = window.width / 2;
	circles.y = window.height / 2;
}

const FPS = 60;

function running() { return !r.WindowShouldClose(); }

function setup() {
	init();

	if (window.width <= window.maxWidth && window.height <= window.maxHeight) {
		r.InitWindow(window.width, window.height, windowTitle);
		r.SetTargetFPS(FPS);
	} else { // Window Size is more than allowed size
		teardown();
	}
}

function update() { }

function draw() {
	let n = circles.count;

	r.BeginDrawing();

	r.ClearBackground(r.BLACK);

	while (n > 0) {
		const color = n % 2 === 0 ? r.WHITE : r.RED;
		r.DrawCircle(circles.x, circles.y, n * circles.thickness, color);
		n--;
	}

	r.EndDrawing();
}

function teardown() { r.CloseWindow(); }

module.exports = {
	running,
	setup,
	update,
	draw,
	teardown,
}