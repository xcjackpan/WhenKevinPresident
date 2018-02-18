walk(document.body);

function walk(node) {

	var child, next;

	switch (node.nodeType) {
		case 1:
		case 9:
		case 11:
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;
	
	v = v.replace(/\bthe\b/g,'');
	v = v.replace(/\bI'm\b/g,'me');
	v = v.replace(/\bmy\b/g,'me');
	v = v.replace(/\bMy\b/g,'Me');
	v = v.replace(/\bare\b/g,'');
	v = v.replace(/\bam\b/g,'');
	v = v.replace(/\bis\b/g,'');
	v = v.replace(/\bwas\b/g,'');
	v = v.replace(/\bwere\b/g,'');
	v = v.replace(/\bdoesn't\b/g,'not');
	v = v.replace(/\bdid not\b/g,'not');
	v = v.replace(/\bcannot\b/g,'not');
	v = v.replace(/\bdidn't\b/g,'not');
	v = v.replace(/\bdoes not\b/g,'not');
	v = v.replace(/\bwasn't\b/g,'not');
	v = v.replace(/\bisn't\b/g,'not');
	v = v.replace(/\bhe's\b/g,'he');
	v = v.replace(/\bHe's\b/g,'He');
	v = v.replace(/\bshe's\b/g,'she');
	v = v.replace(/\bShe's\b/g,'She');
	v = v.replace(/\bWe're\b/g,'we');
	v = v.replace(/\bwe're\b/g,'we');
	v = v.replace(/\bthey're\b/g,'they');
	v = v.replace(/\bThey're\b/g,'They');		
	v = v.replace(/\bIt's\b/g,'It');
	v = v.replace(/\bit's\b/g,'it');


	textNode.nodeValue = v;
}