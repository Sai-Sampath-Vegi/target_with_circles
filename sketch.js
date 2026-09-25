const r = require("raylib");

function getWindowDimenstions(circlesCount, circlesThickness) {
	return 2 * circlesCount * circlesThickness;
}

const circlesCount = 15;
const circlesThickness = 30;

const windowWidth = getWindowDimenstions(circlesCount, circlesThickness);
const windowHeight = getWindowDimenstions(circlesCount, circlesThickness);
const windowTitle = "Target with Circles";

const FPS = 60;

const maxWindowWidth = 1000;
const maxWindowHeight = 1000;

const centerX = windowWidth / 2;
const centerY = windowHeight / 2;

function running() { return !r.WindowShouldClose(); }

function setup() {
	if (windowWidth <= maxWindowWidth && windowHeight <= maxWindowHeight) {
		r.InitWindow(windowWidth, windowHeight, windowTitle);
		r.SetTargetFPS(FPS);
	} else { // Window Size is more than allowed size
		teardown();
	}
}

function update() { }

function draw() {
	let n = circlesCount;

	r.BeginDrawing();

	r.ClearBackground(r.BLACK);

	while (n > 0) {
		const color = n % 2 === 0 ? r.WHITE : r.RED;
		r.DrawCircle(centerX, centerY, n * circlesThickness, color);
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