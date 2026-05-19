# Layout-System

## Raster

- Desktop: 12 Spalten
- Tablet: 8 Spalten
- Mobile: 4 Spalten
- Basisabstand: 8 px
- größere Abstände: 24 / 40 / 64 / 96 px

## Komposition

ZIAN-Layouts arbeiten mit ruhiger Leere, wenigen starken Elementen und präzisen Linien.

## Formensprache

- Hexagon- und Schildformen
- diagonale Z-Linien
- facettierte Flächen
- dünne Innenrahmen
- kantige Module

## Cut-Corner-Form

```css
clip-path: polygon(
  0 0,
  calc(100% - 14px) 0,
  100% 14px,
  100% 100%,
  14px 100%,
  0 calc(100% - 14px)
);
```
