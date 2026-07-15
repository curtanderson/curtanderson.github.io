import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
INDEX = (ROOT / "index.html").read_text(encoding="utf-8")
CSS = (ROOT / "restoration-proposed.css").read_text(encoding="utf-8")
EXPECTED_TOKENS = {
    "paper": "#ffffff",
    "ink": "#171717",
    "accent": "#285a49",
    "muted": "#686868",
    "rule": "#d8d8d4",
    "rail": "#b8b8b1",
    "panel": "#f2f2ee",
    "selection": "#dce7e2",
    "serif": 'Charter, "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif',
    "sans": 'Avenir, "Nunito", "Lato", Verdana, sans-serif',
    "signal": '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
}


def root_tokens(css):
    block = re.search(r":root\s*\{(.*?)\}", css, re.S).group(1)
    return dict(re.findall(r"--([\w-]+)\s*:\s*([^;]+);", block))


def rule_body(css, selector):
    match = re.search(
        rf"(?:^|\}})\s*{re.escape(selector)}\s*\{{(.*?)\}}", css, re.S
    )
    if not match:
        raise AssertionError(f"missing CSS rule: {selector}")
    return match.group(1)


class StyleAlignmentTests(unittest.TestCase):
    def test_linked_stylesheet_is_authoritative(self):
        self.assertNotRegex(INDEX, r"<style\b")
        self.assertEqual(INDEX.count('href="restoration-proposed.css"'), 1)

    def test_shared_tokens_are_exact(self):
        tokens = {name: value.strip() for name, value in root_tokens(CSS).items()}
        for name, value in EXPECTED_TOKENS.items():
            self.assertEqual(tokens.get(name), value)

    def test_letter_spacing_is_zero(self):
        values = re.findall(r"letter-spacing\s*:\s*([^;]+);", CSS)
        self.assertTrue(values)
        self.assertEqual(set(value.strip() for value in values), {"0"})

    def test_shared_interaction_treatment_is_present(self):
        self.assertIn("background: var(--selection);", rule_body(CSS, "::selection"))
        self.assertIn(
            "text-underline-offset: 0.16em;", rule_body(CSS, "a,\na:visited")
        )
        focus = rule_body(CSS, "a:focus-visible")
        self.assertIn("color: var(--accent);", focus)
        self.assertIn("outline: 2px solid var(--accent);", focus)


if __name__ == "__main__":
    unittest.main()
